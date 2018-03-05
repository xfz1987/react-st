import React from 'react';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from './Footer';

export default class extends React.Component {
	render(){
		return (
			<div>
				<AddTodo />
				<VisibleTodoList />
				<Footer />
			</div>
		);
	}
}