export default class UserService {
	constructor(){}
	getData(id){
		return new Promise((resolve) => {
            setTimeout(() => {
                resolve(`Hello UserAction: ${id}`);
            }, 1000);
        })
	}
}