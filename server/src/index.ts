import * as Koa from 'koa';
import * as morgan from 'koa-morgan';
import * as cors from '@koa/cors';
import * as dotenv from 'dotenv'
import * as bodyParser from 'koa-bodyparser';
import router from './router';
import { serverConf } from './config';

dotenv.config();

const server: any = new Koa();

const port: number = serverConf.port;
const host: string = serverConf.host;

server.use(morgan('dev'))
server.use(cors());
server.use(bodyParser());

server.use(router.routes()).use(router.allowedMethods());

server.listen(port, () => {
  console.log(`Server is listening on http://${host}:${port} 🌒🌕🌘`);
});

