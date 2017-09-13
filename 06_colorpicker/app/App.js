import React, {Component} from 'react';
import Bar from './component/Bar/Bar.js';
import './app.less';


class App extends Component{
	constructor(){
		super();
		this.state = {
			r : 10,
			g : 20,
			b : 30
		};

		this.setColor = this.setColor.bind(this);
	}

	setColor(color, val){
		this.setState({[color] : val});
	}

	render(){
		return (
			<div>
				<div className="box" style={{backgroundColor: `rgb(${this.state.r},${this.state.g},${this.state.b})`}}></div>
				<Bar v={this.state.r} color="r" setColor={this.setColor}/>
				<Bar v={this.state.g} color="g" setColor={this.setColor}/>
				<Bar v={this.state.b} color="b" setColor={this.setColor}/>
			</div>
		);
	}
}
// 向外暴露
export default App;