import React from 'react';
import PropTypes from 'prop-types';

class Sz extends React.Component{
	constructor(props, context){
		super();
	}

	render(){
		return (
			<div>
				<p style={{color:'red'}}>你不行</p>
				<h3>我是孙子组件 {this.context.a} <input type="button" value="click" onClick={()=>{this.context.a++;alert(this.context.a)}} /></h3>
				<p>你行</p>
				<h3>我是孙子组件 {this.context.a} <input type="button" value="click" onClick={this.context.addA} /></h3>
			</div>
		)
	}
}

//设置上下文的类型
Sz.contextTypes = {
	a : PropTypes.number,
	addA : PropTypes.func
}

export default Sz;