import React from 'react';
import './css.less';

class Bar extends React.Component{
	constructor(props){
		super();
		this.state = {
			v : props.v
		};
		this.change = this.change.bind(this);
		this.setColor = props.setColor;
	}

	change(event){
		this.setState({v : event.target.value});
		this.setColor(this.props.color, this.state.v);
	}

	render(){
		return (
			<div className="Bar_xfz">
				<div className="bar">
					{this.props.color}：
					<input type="range" min="0" max="255" value={this.state.v} onChange={this.change} />
					<input type="number" min="0" max="255" value={this.state.v} onChange={this.change} />
				</div>
			</div>
		);
	}
}
// 向外暴露
export default Bar;