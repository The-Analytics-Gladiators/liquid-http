import Koa from "koa";

import { router } from "./routes";
import json from "koa-json";
import logger from "koa-logger";
import bodyParser from "koa-bodyparser";

const app = new Koa();

const port = 80;

app.use(json())
app.use(logger())
app.use(
  bodyParser({
    extendTypes: {
      json: ["application/cloudevents+json"],
    },
  })
);

app.use(router.routes())

app.listen(port, () => {
  console.log(`🚀 Server is running on port http://localhost:${port}/`);
});