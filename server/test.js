// const { promisify } = require('util');
// const { exec, execFile } = require('child_process');
const { exec, execFile } = require('child_process');
const { promisify } = require('util');

const execP = promisify(execFile);
const OS = process.platform;

function parseSimpleScan(data) {
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
            const device = { ip4: ip4[ip4.length - 1] }
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

function nmap (args) {
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

async function scanAll () {
  return await nmap({opts: '-sn', range: '192.168.1.0/24'});
}


function test () {
  return new Promise(
    (resolve, reject) => {

      try {
        //execP('sudo',['nmap', opts.args, opts.range])
        execP('nmap', ['-sn', '192.168.1.0/24'])
          .then((data) => console.log(data));
      } catch(err) {
        reject(err);
      }
    });
}
console.log('uid',process.getuid());
console.log('euid',process.geteuid());
process.seteuid('root');
console.log('uid',process.getuid());
console.log('euid',process.geteuid());

test()
  .then(data => {
    console.log(data);
    console.log('uid',process.getuid());
  });