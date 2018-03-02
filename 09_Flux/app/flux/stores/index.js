import {EventEmitter} from 'events';

const listData = Object.assign({}, EventEmitter.prototype, {
	items: ['first', 'second'],
	getAll(){
		return this.items;
	},
	addNewItem(text){
		this.items.push(text);
	},
	emitChange(){
		this.emit('change');
	},
	addChangeListener(callback){
		//注册事件
		this.on('change', callback);
	},
	removeChangeListener(callback){
		this.removeListener('change',callback);
	}
});

export default listData;
