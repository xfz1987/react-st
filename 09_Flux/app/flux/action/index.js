import AppDisPatcher from '../dispatcher';

const Actions = {
	addNewItem(text){
		AppDisPatcher.dispatch({
			actionType: 'ADD_NEW_ITEM',
			text: text
		});
	}
};

export default Actions;