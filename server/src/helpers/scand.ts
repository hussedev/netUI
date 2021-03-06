import { Device, Watched } from '../types/device';
import {
  ScanDOpts,
  CallBackAll,
  CallBackWatched,
  CallBacksNmap } from './scanDTypes';

async function scanAll(target: string, cb: CallBackAll) {

};

async function scanWatched(watched: Watched, cb: CallBackWatched) {

};

// async function scanD (interval: number, opts: ScanDOpts, cb: CallBacksNmap): NodeJS.Timeout {//cb ()
//   return setInterval(async () => {
//     try {
//       switch (opts.mode) {
//         case "all":
//           if (!opts.default) throw new Error('scanD -> Scan target undefined (opts.default)');
//           if (!cb.all) throw new Error('scanD -> Scan handler undefined (cb.all)');
//           await scanAll(opts.default, cb.all);
//         case "watch":
//           if (Object.keys(opts.watched).length > 0) {
//             if (!cb.watched) throw new Error('scanD -> Scan handler undefined (cb.watched)');
//             await scanWatched(opts.watched, cb.watched);
//           }
//           break;
//         default:
//           if (opts.default && cb.all) await scanAll(opts.default, cb.all);
//           else throw new Error('scanD -> Incorrect mode && default scan unavailable');
//       }
//     } catch (err) {

//     }
//   }, interval);
// }

// export default scanD;