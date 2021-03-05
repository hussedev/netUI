"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.scanAll = void 0;
// const { promisify } = require('util');
// const { exec, execFile } = require('child_process');
const child_process_1 = require("child_process");
const util_1 = require("util");
const execP = util_1.promisify(child_process_1.execFile);
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
        latency: /[0-9]+\.[0-9]+s\slatency/g,
        mac: /([^\W_]{2}\:){5}[^\W_]{2}/g,
        macBrand: /([^\W_]{2}\:){5}[^\W_]{2}\s\(.*\)$/g
    };
    if (data) {
        return data
            .reduce((acc, el, idx, str) => {
            const ip4 = el.match(regex.ip4);
            if (ip4) {
                const device = { ip4: ip4[ip4.length - 1] };
                const hostname = el.match(regex.hostname);
                if (hostname)
                    device.hostname = hostname[hostname.length - 1].slice(4, -2);
                if (str.length - idx > 1) {
                    const latency = str[idx + 1].match(regex.latency);
                    if (latency)
                        device.latency = Math.round(+latency[0].slice(0, -9) * 1000);
                    if (str.length - idx > 2) {
                        const macBrand = str[idx + 2].match(regex.macBrand);
                        if (macBrand) {
                            device.mac = macBrand[0].slice(0, 17);
                            device.brand = macBrand[0].slice(19, -1);
                        }
                        else {
                            const mac = str[idx + 2].match(regex.mac);
                            if (mac)
                                device.mac = mac[0];
                        }
                    }
                }
                acc.push(device);
            }
            return acc;
        }, []);
    }
    else
        return [];
}
function nmap(args) {
    return new Promise((resolve, reject) => {
        try {
            //execP('sudo',['nmap', opts.args, opts.range])
            execP('nmap', [args.opts, args.range])
                .then((data) => {
                console.log(data.stdout);
                if (data && data.stdout)
                    resolve(parseSimpleScan(data.stdout.split('\n')));
                resolve([]);
            });
        }
        catch (err) {
            reject(err);
        }
    });
}
function nmapSudo(args) {
    return new Promise((resolve, reject) => {
        try {
            //execP('sudo',['nmap', opts.args, opts.range])
            execP('sudo', ['nmap', args.opts, args.range])
                .then((data) => {
                if (data && data.stdout)
                    resolve(parseSimpleScan(data.stdout.split('\n')));
                resolve([]);
            });
        }
        catch (err) {
            reject(err);
        }
    });
}
function scanAll() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield nmapSudo({ opts: '-sn', range: '192.168.1.0/24' });
    });
}
exports.scanAll = scanAll;
