import React from 'react';
import { observer } from 'mobx-react';
import AddTodo from './AddTodo.js';
import todoStore from '../../stores/todoStore.js';
import Todo from './Todo.js';

@observer
 export default class extends React.Component {
	render(){
		return (
			<div>
				<AddTodo add={todoStore.addTodo}/>
				<ul>
					{
						todoStore.showList.map(todo => (<Todo key={todo.id} {...todo} change={ ()=> todoStore.changeStatus(todo.id) } />))
					}
				</ul>
			</div>
		);
	}
};