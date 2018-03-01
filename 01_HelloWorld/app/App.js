import React, {Component} from 'react';

/**
 * 定义一个叫App的组件
 * React要求自定义组件必须大写字母开头
 * React要求自定义组件的类必须继承React.Component类
 */
class App extends Component{
	haha(type){
		if(type == 'NBA'){
			return (
				<ul>
					<li>Kobe</li>
					<li>Iverson</li>
					<li>Curry</li>
				</ul>
			);
		}else if(type == 'Football') {
			return (
				<ul>
					<li>Meiseeon</li>
					<li>CRoll</li>
				</ul>
			);
		}
	}
	//渲染
	render(){
		let arr = ['白板','一万','六筒'].map((item,index) => <li key={index}>{item}</li>);
		//返回一个jsx语法
		return (
			<div>
				<h1>姑娘，很高兴遇见您！说{5000+5001}次我爱你</h1>
				{this.haha('NBA')}
				<div style={{"color":"green"}}>HaHa</div>
				<ul>{arr}</ul>
			</div>
		);
	}
}

// 向外暴露
export default App;