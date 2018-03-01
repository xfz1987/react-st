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
			wh: !this.state.wh
		})
	}
	render(){
		return (
			<div>
				<Prompt message={this.test} when={this.state.wh}/>
				<p>B默认页面</p>
				<p>路由传值: {this.props.location.search}</p>
				<p>是否启动离开时提示: {this.state.wh ? '开' : '关'}</p>
				<button onClick={this.change}>{this.state.wh ? '关闭' : '开启'}</button>
			</div>
		);
	}
}

export default BBB;