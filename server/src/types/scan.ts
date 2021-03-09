import { Device } from './device';

export interface NmapArgs {
  opts?: string,
  range?: string
}

export interface ISimpleScan {
  target: string,
  gateway?: string,
  timestamp?: number,
  devices?: Device[]
}

export interface Watched {
  [name: string]: {
    gateway?: {
      ip: string,
      mode?: 'local'| 'openvpn' | 'ssh'
    },
    targets: string[]
  }
}

export interface ScanDOpts {
  mode: string,
  watched?: Watched,
  default?: string
}

export type CallBackAll = (device: Device[], error: string) => boolean;
export type CallBackWatched = (watched: Watched, error: string) => boolean;
export interface CallBacksNmap { all?: CallBackAll, watched?: CallBackWatched };