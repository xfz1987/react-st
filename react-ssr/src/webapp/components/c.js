import React from 'react';

class CCC extends React.Component {
	componentDidMount(){
		console.log(this.props);
	}
	render(){
		return (
			<div>C默认页面 {this.props.match.params.aaaa} | {this.props.match.params.bbbb}</div>
		);
	}
}

export default CCC;