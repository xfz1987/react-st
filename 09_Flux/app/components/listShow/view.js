import React from 'react';
import _listData from '../../flux/stores';

class View extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div>
				<ul>
					{_listData.getAll().map((item,i) =>
						<li key={i}>{item}</li>
					)}
				</ul>
				<button onClick={this.props.add}>Add List</button>
			</div>
		);
	}
}

export default View;