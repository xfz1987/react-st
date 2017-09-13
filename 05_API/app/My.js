import React from 'react';

/*无状态组件*/
// export default () => {
// 	return (
// 		<div>
// 			<h1>我是My组件</h1>
// 		</div>
// 	)
// }

class My extends React.Component{
	constructor(props){
		super();
		this.state = {
			isLike : true,
			a: 1
		};
		this.clickHandler = this.clickHandler.bind(this);
		this.name = props.name || '瓜怂';
		this.change = this.change.bind(this);
	}

	clickHandler(){
		this.setState({isLike: !this.state.isLike});
	}

	change(){
		this.replaceState({isLike: false});
	}

	//挂载之前调用
	componentWillMount(){
		console.log('componentWillMount');
	}

	//挂载结束时调用，可以操作DOM节点
	componentDidMount(){
		console.log('componentDidMount');
	}

	//组件被更新时调用
	componentWillReceiveProps(){
		console.log('componentWillReceiveProps');
	}

	//是否允许组件更新,返回false则不允许更新
	shouldComponentUpdate(nextProps, nextState){
		console.log('shouldComponentUpdate' + '|' + nextState.a);
		return nextState.a > 0.5 ? true : false; 	
	}

	//在更新发生之前调用,如果shouldComponentUpdate返回false，那么该函数不会被触发
	componentWillUpdate(){
		console.log('componentWillUpdate');
	}

	//在组件移除和销毁之前被调用
	componentWillUnmount(){
		console.log('componentWillUnmount');
	}

	render(){
		return (
			<div>
				<h1 onClick={this.clickHandler}>you {this.state.isLike ? 'love' : 'hate'} me, click me to change state</h1>
				<h2>{this.name}</h2>
				<input type="button" value="click me" onClick={this.change} />
				<h3>{this.state.a}</h3>
				<input type="button" value="click me" onClick={()=>{this.setState({a: Math.random()})}} />
			</div>
		);
	}
}

export default My;