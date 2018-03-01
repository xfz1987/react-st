import React, {Component} from 'react';
import My from './My.js';
import My2 from './My2.js';
import My3 from './My3.js';


class App extends Component{
	constructor(){
		super();
	}

	render(){
		return (
			<div>
				<My v="12"/>
				<My2 />
				<My3 />
			</div>
		);
	}
}
// 向外暴露
export default App;