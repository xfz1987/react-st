import todos from './todos';
import visibilityFilter from './visibilityFilter';
//将多个reduces合并在一起
import { combineReducers } from 'redux';

export default combineReducers({todos, visibilityFilter});;