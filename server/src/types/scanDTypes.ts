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

export interface Device {
  ip4: string,
  mac?: string,
  hostname?: string,
  latency?: number,
  status?: string,
  type?: string,
  img?: string,
  brand?: string
  statusLog?: {
      status: string,
      time: number,
      duration?: number
  }[],
}

export interface IDevice {
  ip4: string,
  mac?: string,
  hostname?: string,
  latency?: number,
  status?: string,
  type?: string,
  img?: string,
  brand?: string
  statusLog?: {
      status: string,
      time: number,
      duration?: number
  }[],
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