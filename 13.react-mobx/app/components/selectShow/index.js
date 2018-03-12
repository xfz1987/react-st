import React from 'react';

class View extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div>
				<select>
					{this.props.list.map((item,i) =>
						<option key={i}>{item}</option>
					)}
				</select>
			</div>
		);
	}
}

export default View;