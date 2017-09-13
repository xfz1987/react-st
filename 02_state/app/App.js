import React, {Component} from 'react';
/**
 * 可以在组件的类定义上写constructor，里面定义this.a = 100,表示给组件的实例绑定一个a属性，在JSX使用，直接this.a即可
 */
class App extends Component{
	//构造函数
	constructor(){
		super();
		this.state = {
			a : 100
		};
	}

	add(){
		this.setState({a: this.state.a + 1});
	}

	render(){
		return (
			<div>
				<p>{this.state.a}</p>
				<p>
					<input type="button" value="点我" onClick={(this.add).bind(this)}/>				
				</p>
			</div>
		);
	}
}
// 向外暴露
export default App;