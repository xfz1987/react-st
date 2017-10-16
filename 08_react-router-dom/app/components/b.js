import React from 'react';
import {Prompt} from 'react-router-dom';

class BBB extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			wh: false
		}
		this.change = this.change.bind(this);
	}
	test(){
		return '走?'
	}
	change(){
		this.setState({
			wh: true
		})
	}
	render(){
		return (
			<div>
				<Prompt message={this.test} when={this.state.wh}/>
				<p>B默认页面</p>
				<button onClick={this.change}>启动离开时提示</button>
			</div>
		);
	}
}

export default BBB;