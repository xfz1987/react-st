import React from 'react';
import _listData from '../..//flux/stores'

class View extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div>
				<select>
					{_listData.getAll().map((item,i) =>
						<option key={i}>{item}</option>
					)}
				</select>
			</div>
		);
	}
}

export default View;