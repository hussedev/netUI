import * as Koa from 'koa';
import * as morgan from 'koa-morgan';
import * as cors from '@koa/cors';

import router from './router';
import { serverConf } from './config';

const server: any = new Koa();

const port: number = serverConf.port;
const host: string = serverConf.host;

server.use(morgan('dev'))
server.use(cors());
server.use(router.routes()).use(router.allowedMethods());

server.listen(port, () => {
  console.log(`Server is listening on http://${host}:${port} 🌒🌕🌘`);
});

