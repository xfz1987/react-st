import React from 'react';
import View from './view';
import actionhandle from '../../Flux/action';

class ListShow extends React.Component {
	constructor(props){
		super(props);
		this.addList = this.addList.bind(this);
	}
	addList(){
		actionhandle.addNewItem('new item');
	}
	render(){
		return (
			<View add={this.addList}/>
		);
	}
}

export default ListShow;