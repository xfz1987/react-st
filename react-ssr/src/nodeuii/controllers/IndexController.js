import { route, GET } from 'awilix-koa';

//配置路由为 /
@route('/')
@route('/index.html')
export default class IndexController{
    //注入helloService
    constructor({indexService}){
        this.indexService = indexService;
    }
    @GET()
    async getUser(ctx){
        const result = this.indexService.init();
        ctx.body = result;
    }
}
