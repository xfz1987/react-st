import React, {Component} from 'react';
import TodoList from './TodoList.js';

class Todo extends Component {
	constructor(props){
		super(props);
		this.state = { items: [], text: '' };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	render(){
		return (
			<div>
        		<h3>TODO</h3>
        		<TodoList items={this.state.items} />
        		<form onSubmit={this.handleSubmit}>
        		  <input
        		    onChange={this.handleChange}
        		    value={this.state.text}
        		  />
        		  <button>
        		    Add #{this.state.items.length + 1}
        		  </button>
        		</form>
      		</div>
		);
	}

	handleChange(e){
		this.setState({ text: e.target.value });
	}

	handleSubmit(e){
		e.preventDefault();
		if(!this.state.text.length) return false;
		const newItem = {
			id: Date.now(),
			text: this.state.text
		};
		this.setState(prevState => ({
			items: prevState.items.concat(newItem),
			text: ''
		}));
	}
}

export default Todo;