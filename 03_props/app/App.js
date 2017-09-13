import React, {Component} from 'react';
import MyCompon from './MyCompon.js';
/**
 * 可以在组件的类定义上写constructor，里面定义this.a = 100,表示给组件的实例绑定一个a属性，在JSX使用，直接this.a即可
 */
class App extends Component{
	//构造函数
	constructor(){
		super();
		this.state = {
			c : '5',
			d: 4
		};
	}

	setD(num){
		this.setState({d : num});

	}

	render(){
		return (
			<div>
				<h1>我是组件d: {this.state.d}</h1>
				<MyCompon a="1" b={2} c={this.state.c} setD={(this.setD).bind(this)} d={this.state.d} />
				
			</div>
		);
	}
}
// 向外暴露
export default App;