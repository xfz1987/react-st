import { route, GET } from 'awilix-koa'

@route('/user')
export default class UserController {
	constructor({ userService }){
		this.userService = userService
	}
	// 路由 user/123
	@route('/:id')
	@GET()
	async getUser(ctx){
		const result = await this.userService.getData(ctx.params.id);
		ctx.body = result;
	}
}