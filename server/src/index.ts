import * as Koa from 'koa';
import * as morgan from 'koa-morgan';
import * as Router from 'koa-router';

import {server as serverConf} from '../config.js';

const app = new Koa();
const router = new Router();

const port: number = serverConf.port;
const host: string = serverConf.host;


router.get('/', async (ctx, next) => {
  ctx.body = { msg: 'Hey! I am your server, kneel!!!' };

  await next();
});

app.use(morgan('dev'))
app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
  console.log(`Server is listening on http://${host}:${port} 🌒🌕🌘`);
});

