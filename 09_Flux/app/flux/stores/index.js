import {EventEmitter} from 'events';
console.log(EventEmitter)

const listData = Object.assign({}, EventEmitter.prototype, {
	items: ['first', 'second'],
	getAll(){
		return this.items;
	},
	addNewItem(text){
		this.items.push(text);
	},
	emitChange(){
		//触发事件
		console.log(this);
		this.emit('change');
	},
	addChangeListener: function(callback){
		alert(111);
		//注册事件
		this.on('change',callback);
	},
	removeChangeListener(callback){
		this.removeListener('change',callback);
	}
});

export default listData;
