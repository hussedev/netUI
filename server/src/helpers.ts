// const { promisify } = require('util');
// const { exec, execFile } = require('child_process');
import { exec, execFile } from 'child_process';
import { promisify } from 'util';
import { Device, NmapArgs } from './types/device';

const execP = promisify(execFile);
const OS = process.platform;

function parseSimpleScan(data: string[]): Device[] {
  /**
   * ip4 -> xxx.xxx.xxx.xxx
   * latency -> 'x+.x+s latency'
   * hostname ->
   */
  const regex = {
    ip4: /((25[0-5]|(2[0-4]|1[0-9]|[1-9]|)[0-9])\.){3}(25[0-5]|(2[0-4]|1[0-9]|[1-9]|)[0-9])/g,
    hostname: /for\s(([\w]|[\w][\w\-]*[\w])\.)*([\w]|[\w][\w\-]*[\w])\s\(/g,
    latency: /[0-9]+\.[0-9]+s\slatency/g
  }

  if (data) {
    return data
        .reduce((acc, el, idx, str) => {
          const ip4 = el.match(regex.ip4);
          if (ip4) {
            const device: Device = { ip4: ip4[ip4.length - 1] }
            const hostname = el.match(regex.hostname);
            if (hostname) device.hostname = hostname[hostname.length - 1].slice(4, -2);
            if (str.length - idx > 1) {
              const latency = str[idx+1].match(regex.latency);
              if (latency) device.latency = Math.round(+latency[0].slice(0,-9)*1000);
            }
            acc.push(device);
          }
          return acc;
        },[]);
  } else return [];
}

function nmap (args: NmapArgs): Promise<Device[]> {
  return new Promise(
    (resolve, reject) => {

      try {
        //execP('sudo',['nmap', opts.args, opts.range])
        execP('nmap', [args.opts, args.range])
          .then((data) => {
            if(data && data.stdout) resolve(parseSimpleScan(data.stdout.split('\n')));
            resolve([]);
        });
      } catch(err) {
        reject(err);
      }
    });
}

export async function scanAll (): Promise<Device[]> {
  return await nmap({opts: '-sn', range: '192.168.1.0/24'});
}

