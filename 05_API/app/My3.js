import React from 'react';

//表单的双向绑定
class My3 extends React.Component{
	constructor(props){
		super();
		this.change = this.change.bind(this);
	}

	change(){
		const box = this.refs.box;
		box.style.background = 'orange';
	}

	render(){
		return (
			<div>
				<input type="button" value="按我让盒子变色" onClick={this.change} />
				<div className="box" style={{width:"100px",height:"100px",background:"red"}} ref="box"></div>
			</div>
		);
	}
}

export default My3;