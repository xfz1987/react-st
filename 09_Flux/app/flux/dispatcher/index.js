import {Dispatcher} from 'flux';
// import listData from '../stores';

const AppDispatcher = new Dispatcher();
AppDispatcher.register(action => {
	switch(action.actionType){
		case 'ADD_NEW_ITEM':
			_listData.addNewItem(action.text);
			_listData.emitChange();
			break;
		default:
		//no op
	}
});

export default AppDispatcher;