import { execFile } from 'child_process';
import { promisify } from 'util';
import { exec, execSudo } from './shell';
import { Device } from '../../types/device';
import { NmapArgs } from '../../types/scan';

const execP = promisify(execFile);

function parseSimpleScan(data: string[]): Device[] {
  const regex = {
    ip4: /((25[0-5]|(2[0-4]|1[0-9]|[1-9]|)[0-9])\.){3}(25[0-5]|(2[0-4]|1[0-9]|[1-9]|)[0-9])/g,
    hostname: /for\s(([\w]|[\w][\w\-]*[\w])\.)*([\w]|[\w][\w\-]*[\w])\s\(/g,
    latency: /[0-9]+\.[0-9]+s\slatency/g,
    mac: /([^\W_]{2}\:){5}[^\W_]{2}/g,
    macBrand: /([^\W_]{2}\:){5}[^\W_]{2}\s\(.*\)$/g
  }

  if (!data) return [];
  return data
    .reduce((acc, el, idx, str) => {
      const ip4 = el.match(regex.ip4);
      if (ip4) {
        const device: Device = { ip4: ip4[ip4.length - 1] }
        const hostname = el.match(regex.hostname);
        if (hostname) {
          hostname[hostname.length - 1].slice(-4) === '.lan'
            ? device.hostname = hostname[hostname.length - 1].slice(4, -6)
            : device.hostname = hostname[hostname.length - 1].slice(4, -2);
        }
        if (str.length - idx > 1) {
          const latency = str[idx + 1].match(regex.latency);
          if (latency) device.latency = Math.round(+latency[0].slice(0, -9) * 1000);
          if (str.length - idx > 2) {
            const macBrand = str[idx + 2].match(regex.macBrand);
            if (macBrand) {
              device.mac = macBrand[0].slice(0, 17);
              device.brand = macBrand[0].slice(19, -1)
            } else {
              const mac = str[idx + 2].match(regex.mac);
              if (mac) device.mac = mac[0];
            }
          }
        }
        acc.push(device);
      }
      return acc;
    }, []);
}

function nmap(args: NmapArgs): Promise<Device[]> {
  return new Promise(
    (resolve, reject) => {
      try {
        exec('nmap -sn 192.168.1.0/24')
          .then((data) => resolve(parseSimpleScan(data)));
      } catch (err) {
        reject(err);
      }
    });
}

function nmapSudo(args: NmapArgs): Promise<Device[]> {
  return new Promise(
    (resolve, reject) => {
      try {
        execSudo('nmap -sn 192.168.1.0/24')
          .then((data) => resolve(parseSimpleScan(data)));
      } catch (err) {
        reject(err);
      }
    });
}

export async function scanAll(): Promise<Device[]> {
  return await nmapSudo({ opts: '-sn', range: '192.168.1.0/24' });
}

export async function scanAllTarget(target: string): Promise<Device[]> {

  return await nmapSudo({ opts: '-sn', range: target });
}

