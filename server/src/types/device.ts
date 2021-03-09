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

export interface DeviceGroup {
  [name: string]: Device[];
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
  watched: Watched,
  default: string
}