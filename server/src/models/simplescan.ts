import { Document, Schema, Model, Types, Query } from 'mongoose';
import { ISimpleScan } from '../types/scan';
import { Device } from '../types/device';
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
}
