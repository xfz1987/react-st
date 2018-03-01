import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

/**
 * 可以在组件的类定义上写constructor，里面定义this.a = 100,表示给组件的实例绑定一个a属性，在JSX使用，直接this.a即可
 */
class MyCompon extends Component{
	//构造函数
	constructor(props){
		super();
		console.log(props.a, typeof props.a);//1 string
		console.log(props.b, typeof props.b);//2 number
		this.state = {
			b : props.b,
			d : props.d
		};
		this.setD = () => {
			var number = this.state.d + 1;
			this.setState({d : number});
			props.setD(number);
		}
	}

	render(){
		return (
			<div>
				<h1>我是MyCompon组件：a-{this.props.a}\b-{this.props.b}</h1>
				<p>b:{this.state.b}</p>
				<p>
					<input type="button" value="click me" onClick={()=>{this.setState({b: this.state.b+1})}} />
				</p>
				<p>c:{this.props.c}</p>
				<p>d:{this.state.d}</p>
				<p>
					<input type="button" value="change d" onClick={()=>{this.setD()}} />
				</p>
			</div>
		);
	}
}

//定义组件需要传入的参数
MyCompon.propTypes = {
	a: PropTypes.string.isRequired,
	b: PropTypes.number.isRequired,
	c: PropTypes.string.isRequired
}

// 向外暴露
export default MyCompon;