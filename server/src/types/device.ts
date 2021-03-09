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

export interface DeviceGroup {
  [name: string]: Device[];
}