/*
 * action 类型
 */

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'COMPLETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

/*
 * 其它的常量
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

/*
 * action 创建函数
 */


let nextTodoId = 0;

//新增一条todo
export const addTodo = (text) => {
	return {
		type: ADD_TODO,
		id: ++nextTodoId,
		text
	};
};

//设置显示all completed active
export const setVisibilityFilter = (filter) => {
	return {
		type: SET_VISIBILITY_FILTER,
		filter
	}
};

//切换是否已经completed
export const toggleTodo = (id) => {
	return {
		type: TOGGLE_TODO,
		id
	}
};