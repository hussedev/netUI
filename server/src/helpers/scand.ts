import { Device, Watched, ScanDOpts } from '../types/device';

type CallBackAll = (device: Device[], error: string) => boolean;
type CallBackWatched = (watched: Watched, error: string) => boolean;

async function scanAll(target: string, cb: CallBackAll) {

};

async function scanWatched(watched: Watched, cb: CallBackAll) {

};

async function scanD (interval: number, opts: ScanDOpts, cb: CallBack) {//cb ()
  setInterval(() => {
    switch (opts.mode) {
      case "all":
        if(opts.default) scanAll(opts.default, cb);
      case "watch":
        if(opts.watched) scanWatched(opts.watched, cb);
        break;
      default:
        if(opts.default) scanAll(opts.default, cb);
    }
  }, interval);
}

export default scanD;