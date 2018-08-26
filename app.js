'use strict';

const Koa = require('koa');
const Router = require('koa-router');


const app = new Koa();

const routerMiddleware = new Router();
const appRouter = require('./routes/router');

const Database = require('./middleware/db');
const databaseMiddleware = new Database();
// const db = databaseMiddleware.initialize();

appRouter.initialize(app, routerMiddleware);


app
  .use(databaseMiddleware.setup)
  .use(routerMiddleware.routes())
  .use(routerMiddleware.allowedMethods());



app.listen(8999);

app.on('error', (err, ctx) => {
  log.error('server error', err, ctx)
});