export interface Device {
  id?: string,
  ip4: string,
  mac?: string,
  hostname?: string,
  latency?: number,
  status?: string,
  type?: string,
  brand?: string
}

export interface NmapArgs {
  opts?: string,
  range?: string
}