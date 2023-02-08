import Koa, { Context } from 'koa';
import * as Router from 'koa-router';

import * as Logger from 'koa-logger';
import * as KoaJSON from 'koa-json';

import { PORT_ADDRESS } from '../config';

const server = new Koa();
const router = new Router();

const PORT: string = PORT_ADDRESS;

router.get('/', async (ctx: Context, next) => {
  ctx.body = { message: 'Server successful' };
  await next();
});

// Middleware
server.use(Logger());
server.use(KoaJSON());

// Routes
server.use(router.routes()).use(router.allowedMethods());

server.listen(PORT, async () => {
  console.log(`Server running in port ${PORT}`);
});
