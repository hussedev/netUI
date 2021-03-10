import { scanAll, scanAllTarget } from '../helpers/shell/nmap';
import { createSimpleScan } from '../models/simplescan';
import { IDevice } from '../types/device'
import { ISimpleScan } from '../types/scan'

export async function scan(ctx) {
  try {
    const data: IDevice[] = await scanAll()
    const result: ISimpleScan = {
      target: 'default',
      devices: data,
      timestamp: Date.now(),
    }

    const simpleScan: ISimpleScan = await createSimpleScan(result);
    if (!simpleScan) throw new Error('controllers - nmap - scan, while writing to DB');

    ctx.body = data;
    ctx.status = 200;
  } catch (err) {
    console.error(err);
    ctx.body = err;
    ctx.status = 500;
  }
}

export async function scanTarget(ctx) {
  try {
    const data: IDevice[] = await scanAllTarget(ctx.request.body)
    const result: ISimpleScan = {
      target: 'default',
      devices: data,
      timestamp: Date.now(),
    }

    const simpleScan: ISimpleScan = await createSimpleScan(result);
    if (!simpleScan) throw new Error('controllers - nmap - scan, while writing to DB');

    ctx.body = data;
    ctx.status = 200;
  } catch (err) {
    console.error(err);
    ctx.body = err;
    ctx.status = 500;
  }
}
