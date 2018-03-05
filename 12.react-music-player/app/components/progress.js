import React from 'react';
import './progress.less';

class Progress extends React.Component{
	constructor(props){
		super();
		this.changeProgress = this.changeProgress.bind(this);
		this.change = props.onProgressChange;
	}

	changeProgress(e){
		let bar = this.refs.progressBar,
		    pro = (e.clientX - bar.getBoundingClientRect().left) / bar.clientWidth;
		this.change && this.change(pro);
	}

	render(){
		return (
			<div className="component-progress" ref="progressBar" onClick={this.changeProgress}>
				<div className="progress" style={{width: `${this.props.progress}%`,backgroundColor: this.props.barColor?this.props.barColor:'#ff0000'}}></div>
			</div>
		);
	}
}

export default Progress;
