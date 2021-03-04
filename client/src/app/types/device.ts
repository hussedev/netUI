export interface Device {

  readonly ip4: string,
  mac?: string,
  hostname?: string,
  latency?: number,
  status?: string,
  type?: string,
  isOn: () => boolean;
}

function isOn (device: Device): boolean {
  return status === 'up';
}
