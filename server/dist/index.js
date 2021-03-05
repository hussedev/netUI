"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const morgan = require("koa-morgan");
const cors = require("@koa/cors");
const router_1 = require("./router");
const config_js_1 = require("../config.js");
const server = new Koa();
const port = config_js_1.server.port;
const host = config_js_1.server.host;
/**
 * CORS middleware
 *
 * @param {Object} [options]
 *  - {String|Function(ctx)} origin `Access-Control-Allow-Origin`, default is request Origin header
 *  - {String|Array} allowMethods `Access-Control-Allow-Methods`, default is 'GET,HEAD,PUT,POST,DELETE,PATCH'
 *  - {String|Array} exposeHeaders `Access-Control-Expose-Headers`
 *  - {String|Array} allowHeaders `Access-Control-Allow-Headers`
 *  - {String|Number} maxAge `Access-Control-Max-Age` in seconds
 *  - {Boolean|Function(ctx)} credentials `Access-Control-Allow-Credentials`, default is false.
 *  - {Boolean} keepHeadersOnError Add set headers to `err.header` if an error is thrown
 * @return {Function} cors middleware
 * @api public
 */
server.use(cors());
server.use(morgan('dev'));
server.use(router_1.default.routes()).use(router_1.default.allowedMethods());
server.listen(port, () => {
    console.log(`Server is listening on http://${host}:${port} 🌒🌕🌘`);
});
