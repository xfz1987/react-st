import React from 'react';

//表单的双向绑定
class My2 extends React.Component{
	constructor(props){
		super();
		this.state = {
			txt : ''
		};
		this.change = this.change.bind(this);

	}

	change(event){
		this.setState({txt: event.target.value})
	}

	render(){
		return (
			<div>
				<input type="text" onInput={this.change} />
				<h3>{this.state.txt}</h3>
			</div>
		);
	}
}

export default My2;