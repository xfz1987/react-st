import React from 'react';

export default class extends React.Component {
	render(){
		const { completed ,text, change } = this.props;
		return (
			<li 
				onClick={change}
				style={{textDecoration:completed?"line-through":"none"}}>
				{this.text}
			</li>
		);
	}
}