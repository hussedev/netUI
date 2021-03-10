export interface Device {
  ip4: string,
  mac?: string,
  hostname?: string,
  latency?: number,
  status?: string,
  type?: string,
  img?: string,
  brand?: string,
  watched?: boolean,
  statusLog?: {
    status: string,
    time: number,
    duration?: number
  }[],
}

export interface DeviceGroup {
  [name: string]: Device[];
}

export interface Watched {
  [name: string]: {
    gateway?: {
      ip: string,
      mode: string
    },
    targets: string[]
  }
}
