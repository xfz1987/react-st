import Koa from 'koa';
import config from './config';
import log4js from 'log4js';
import serve from 'koa-static';
import errorHandler from './middlewares/errorHandler';

const { createContainer, Lifetime } = require('awilix');//IOC
const { loadControllers, scopePerRequest } = require('awilix-koa');//IOC

//创建服务实例
const app = new Koa();

//创建IOC的容器
const container = createContainer();
//每一次请求都是一个new model
app.use(scopePerRequest(container));
//装载所有的service(models), 并将services代码注入到controllers
container.loadModules([`${__dirname}/services/*.js`], {
  // we want `TodosService` to be registered as `todosService`.
  formatName: 'camelCase',
  resolverOptions: {
    lifetime: Lifetime.SCOPED
  }
});

//配置log
log4js.configure({
    appenders: { cheese: { type: 'file', filename: './logs/yd.log' } },
    categories: { default: { appenders: ['cheese'], level: 'error' } }
});
const logger = log4js.getLogger('cheese');

//错误处理
errorHandler.error(app, logger);

//注册所有路由
app.use(loadControllers(`${__dirname}/controllers/*.js`, {cwd: __dirname}));

//配置静态文件目录
app.use(serve(config.staticDir));

//启动服务
app.listen(config.port, () => {
	console.info(`server is running on port ${config.port}`);
});

module.exports = app;