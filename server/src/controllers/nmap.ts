import { scanAll } from '../helpers';

async function scan (ctx, next) {
  try {
    const data = await scanAll()
    console.log(data);
    ctx.body = data;
    ctx.status = 200;
  } catch (err) {
    console.log(err);
    ctx.body = err;
    ctx.status=500;
  }


}

export {scan};