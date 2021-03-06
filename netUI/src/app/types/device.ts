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
