import React from 'react';
import { addTodo } from '../actions';

export default class extends React.Component {
	render(){
		const { dispatch } = this.props;
		return (
			<div>
				<form onSubmit={e => {
					e.preventDefault();
					if(!this.input.value.trim()) return false;
					dispatch(addTodo(this.input.value));
					this.input.value = '';
				}}>
					<input type="text" ref={node => {this.input = node}} />
					<button type="submit">Add Todo</button>
				</form>
			</div>
		);
	}
};