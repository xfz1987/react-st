import React from 'react';

export default class extends React.Component {
	render(){
		const { active, children, changeState } = this.props;
		if(active) return <span>{children}</span>;
		return (
			<a href="javascript:;" onClick={e => {
				e.preventDefault();
				changeState();
			}}>{children}</a>
		);
	}
}