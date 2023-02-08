import * as Koa from "koa";
import * as Router from "koa-router";

import * as Logger from "koa-logger";
import * as KoaJSON from "koa-json";

import { PORT_ADDRESS} from '../config'


const server = new Koa();
const router = new Router();

const PORT = PORT_ADDRESS;

router.get("/", async (ctx, next) => {
  ctx.body = { message: "Hello World" };

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
