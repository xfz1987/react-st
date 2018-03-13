import React from 'react';

 export default class extends React.Component {
	render(){
		return (
			<div>
				<form onSubmit={e => {
					e.preventDefault();
					if(!this.input.value.trim()) return false;
					this.props.add(this.input.value);
					this.input.value = '';
				}}>
					<input type="text" ref={node => {this.input = node}} />
					<button type="submit">Add Todo</button>
				</form>
			</div>
		);
	}
};