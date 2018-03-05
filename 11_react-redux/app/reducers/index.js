import todos from './todos';
import visibilityFilter from './visibilityFilter';
import { combineReducers } from 'redux';

//将多个reduces合并在一起
export default combineReducers({todos, visibilityFilter});