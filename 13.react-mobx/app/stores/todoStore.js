import {observable, action, useStrict, computed} from 'mobx';
// import visibilityStore from './visibilityStore.js';
import visibilityStore from './visibilityStore.js';
const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } = visibilityStore.SATUS;

useStrict(true);

let nextTodoId = 0;

class TodoStore {
    @observable todos = [{id:0,text:'start',completed:false}];
    @action addTodo =(text) => {
        this.todos.push({ id: ++nextTodoId, text, completed: false });
    };
    @action changeStatus = (id) => {
        this.todos.map(todo => {
            if(todo.id === id) todo.completed = !todo.completed;
            return todo;
        });
    }
    @computed get showList(){
        switch(visibilityStore.filter){
            case SHOW_ALL:
                return this.todos;
            case SHOW_COMPLETED:
                return this.todos.filter(t => t.completed);
            case SHOW_ACTIVE:
                return this.todos.filter(t => !t.completed);
        }
    }
}

export default new TodoStore();