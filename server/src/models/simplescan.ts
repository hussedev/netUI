import { Document, Schema, Model, Types, Query } from 'mongoose';
import { Device, ISimpleScan } from '../helpers/scanDTypes';
import * as mongoose from './index';

export interface DISimpleScan extends Document {
  target: string,
  gateway?: string,
  timestamp?: number,
  devices?: Device[]
}



const SimpleScanSchema: Schema = new Schema({
  target: { type: String, required: true },
  gateway: { type: String, required: false },
  devices: {
    type: [{
      hostname: { type: String, required: false },
      ip4: { type: String, required: false },
      mac: { type: String, required: false },
      brand: { type: String, required: false },
      latency: { type: Number, required: false },
    }],
    required: false
  },
  timestamp: { type: Number, required: false },
});



const SimpleScan: Model<DISimpleScan> = mongoose.model('SimpleScan', SimpleScanSchema);

export async function createSimpleScan (post: ISimpleScan): Promise<ISimpleScan> {
  return await SimpleScan.create({ ...post });
  // const res: ISimpleScan = await SimpleScan.create({ ...post });
  // if (res) return true;
  // return false;
}
