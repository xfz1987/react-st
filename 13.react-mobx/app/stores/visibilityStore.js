import { observable, action, useStrict } from 'mobx';

useStrict(true);

class Visibility {
	SATUS = {
		SHOW_ALL: 'SHOW_ALL',
		SHOW_COMPLETED: 'SHOW_COMPLETED',
		SHOW_ACTIVE: 'SHOW_ACTIVE'
	};
	@observable filter = this.SATUS.SHOW_ALL;
	@action changeActive = (newFilter) => {
		this.filter = newFilter;
	}
}

export default new Visibility();