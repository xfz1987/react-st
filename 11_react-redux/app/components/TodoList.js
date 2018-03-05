import React from 'react';
import Todo from './Todo';
export default class extends React.Component {
	render(){
		const { todos, onTodoClick } = this.props;
		return (
			<ul>
				{ todos.map(todo => <Todo key={todo.id} {...todo} change={()=>onTodoClick(todo.id)} />) }
			</ul>
		);
	}
}