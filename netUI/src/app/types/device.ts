export interface Device {

  ip4: string,
  mac?: string,
  hostname?: string,
  latency?: number,
  status?: string,
  type?: string,
  img?: string,
  brand?: string
  // isOn: () => boolean;
}

// function isOn (device: Device): boolean {
//   return status === 'up';
// }

export interface Target {
  name?: string,
  target: Device[]
}
