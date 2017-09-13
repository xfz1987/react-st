import React from 'react';
import Baba from './Baba.js';
import PropTypes from 'prop-types';

class Yeye extends React.Component{
	constructor() {
		super();
		this.state = {
			a : 100
		}
	}

	//设置自己的A值，这个函数要进入上下文的通道中
	addA(){
		this.setState({a: this.state.a+1});
	}

	//设置后代的上下方法，并返回一个对象，这个对象就是现在这个家族体系共享的上下文
	//将上下文中的a值变为自己状态中的a值
	getChildContext(){
		return {
			a : this.state.a,
			addA : (this.addA).bind(this)
		}
	}

	render(){
		return (
			<div>
				<h1>我是爷爷组件 {this.state.a} <input type="button" value="click" onClick={()=>{this.setState({a: this.state.a+1})}} /></h1>
				<Baba />
			</div>
		)
	}
}

//设置child上下文的类型(必须的)
Yeye.childContextTypes = {
	a : PropTypes.number.isRequired,
	addA: PropTypes.func.isRequired
}

export default Yeye;