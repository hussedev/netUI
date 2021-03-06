export interface NmapArgs {
  opts?: string,
  range?: string
}

export interface Device {

  ip4: string,
  mac?: string,
  hostname?: string,
  latency?: number,
  status?: string,
  type?: string,
  img?: string,
  brand?: string
}

// dynamic object definition
export interface DeviceGroup {
  [name: string]: Device[];
}

/**
 * mode: local/openvpn/ssh
 */
export interface Watched {
  [name: string]: {
    gateway?: {
      ip: string,
      mode: string
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