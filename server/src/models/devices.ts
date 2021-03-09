import { Document, Schema, Model, Types, Query } from 'mongoose';
import { IDevice } from '../helpers/scanDTypes';
import * as mongoose from './index';

export interface DDevice extends Document {
  ip4: string,
  mac?: string,
  hostname?: string,
  latency?: number,
  status?: string,
  type?: string,
  img?: string,
  brand?: string,
  statusLog?: {
      status: string,
      time: number,
      duration?: number
  }[],
};

function parseResult(
  result: 'on' | 'off' | 'unknown' | undefined,
  device: Device | undefined
): Device {
  if (result && device) {
    device.status = result;
    const lastLog = device.statusLog.pop();
    if (!lastLog) {
      if (result = 'on') {
        device.statusLog
          .push({
            status: 'on',
            time: Date.now(),
            duration: 0
          });
        }
    }
    switch (result) {
      case 'on':
        if (lastLog.status === 'on') {
          lastLog.duration = Date.now() - lastLog.duration;
          device.statusLog.push(lastLog);
        } else {
          device.statusLog.push(lastLog);
          device.statusLog.push({
            status: 'on',
            time: Date.now(),
            duration: 0
          });
        }
        break;
      case 'off':
        // TODO: Handle off durations
        if (lastLog.status === 'on') {
          lastLog.duration = Date.now() - lastLog.duration;
          device.statusLog.push(lastLog);
          device.statusLog.push({
            status: 'off',
            time: Date.now(),
          });
        }
        break;
      case 'unknown':
        // TODO: Handle unknown status,
        // ? Unknown -> gateway doesn't answer
        break;
    }
    return device;
  }
  return null;
}

const DeviceSchema: Schema = new Schema({
  hostname: { type: String, required: false },
  ip4: { type: String, required: false },
  mac: { type: String, required: false },
  brand: { type: String, required: false },
  latency: { type: Number, required: false },
  timestamp: { type: Number, required: false },
});



const DeviceModel: Model<DDevice> = mongoose.model('DeviceModel', DeviceSchema);

export async function createDevice (post: IDevice): Promise<IDevice> {
  return await DeviceModel.create({ ...post });
}