'use strict';

const Koa = require('koa');
const Router = require('koa-router');
const serve = require('koa-static');

const app = new Koa();

const routerMiddleware = new Router();
const appRouter = require('./routes/router');

const Database = require('./middlewares/db');
const databaseMiddleware = new Database();
// const db = databaseMiddleware.initialize();

appRouter.initialize(app, routerMiddleware);


app
  .use(serve('./ui'))
  .use(databaseMiddleware.setup)
  .use(routerMiddleware.routes())
  .use(routerMiddleware.allowedMethods());

app.listen(8999);