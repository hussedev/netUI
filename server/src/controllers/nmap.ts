import { scanAll } from '../helpers';
import { createSimpleScan } from '../models/simplescan';
import { IDevice, ISimpleScan } from '../helpers/scanDTypes'
export async function scan (ctx, next) {
  try {
    const data: IDevice[] = await scanAll()
    ctx.body = data;
    ctx.status = 200;
    const result: ISimpleScan = {
      target: 'None',
      devices: data,
      timestamp: Date.now(),
    }

    const simpleScan: ISimpleScan = await createSimpleScan(result);

  } catch (err) {
    console.log(err);
    ctx.body = err;
    ctx.status=500;
  }
}

