import React, {Component} from 'react';
import Yeye from './Yeye.js';

class App extends Component{
	constructor(){
		super();
	}

	render(){
		return (
			<div>
				<Yeye />
			</div>
		);
	}
}
// 向外暴露
export default App;