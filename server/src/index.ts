import * as Koa from 'koa';
import * as morgan from 'koa-morgan';
import * as cors from '@koa/cors';
import router from './router';

import conf from './config';

const server: any = new Koa();

const port: number = conf.server.port;
const host: string = conf.server.host;

server.use(morgan('dev'))
server.use(cors());
server.use(router.routes()).use(router.allowedMethods());

server.listen(port, () => {
  console.log(`Server is listening on http://${host}:${port} 🌒🌕🌘`);
});
/*
export netScannet = () => {}//setInterval ponerla en el helper

require(adfadf)()
*/

