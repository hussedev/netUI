import * as Koa from 'koa';
import * as morgan from 'koa-morgan';
import router from './router';

import { server as serverConf } from '../config.js';

const server: any = new Koa();

const port: number = serverConf.port;
const host: string = serverConf.host;


server.use(morgan('dev'))
server.use(router.routes()).use(router.allowedMethods());

server.listen(port, () => {
  console.log(`Server is listening on http://${host}:${port} 🌒🌕🌘`);
});

