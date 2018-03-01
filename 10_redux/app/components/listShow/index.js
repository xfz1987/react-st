import React from 'react';

class View extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div>
				<ul>
					{this.props.list.map((item,i) =>
						<li key={i}>{item}</li>
					)}
				</ul>
				<button onClick={this.props.add}>Add List</button>
			</div>
		);
	}
}

export default View;