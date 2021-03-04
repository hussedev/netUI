import * as Router from 'koa-router';
import * as nmap from './controllers/nmap';

const router = new Router();

router.get('/', async (ctx, next) => {
  ctx.body = { msg: 'Hey! I am your server, kneel!!!' };

  await next();
});

router.get('/nmap', nmap.scan);

export default router;