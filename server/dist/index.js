"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const morgan = require("koa-morgan");
const Router = require("koa-router");
const config_js_1 = require("../config.js");
const app = new Koa();
const router = new Router();
const port = config_js_1.server.port;
const host = config_js_1.server.host;
router.get('/', (ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    ctx.body = { msg: 'Hey! I am your server, kneel!!!' };
    yield next();
}));
app.use(morgan('dev'));
app.use(router.routes()).use(router.allowedMethods());
app.listen(port, () => {
    console.log(`Server is listening on http://${host}:${port} 🌒🌕🌘`);
});
