import Router from "koa-router";

export const router = new Router();

type SomethingWithBlock = {
    data: object
}

let state: object | null = null

router.get("/healtz", (ctx) => {
    ctx.body = "OK"
});

router.get("/", (ctx) => {
    ctx.body = JSON.stringify(state);
    ctx.type = 'application/json'
});

router.post("/event", (ctx) => {
  const msg = ctx.request.body as SomethingWithBlock
  if(msg.data === undefined) {
    ctx.throw(415, `cloud event only ${JSON.stringify(msg)}`)
  }
  state = msg.data;
  ctx.body = "OK";
});