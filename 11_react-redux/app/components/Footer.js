import React from 'react';
import FilterLink from '../containers/FilterLink';
import { VisibilityFilters } from '../actions';
const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } = VisibilityFilters;

export default class extends React.Component {
	render(){
		return (
			<p>
				Show: {" "}
				<FilterLink filter={SHOW_ALL}>All</FilterLink>{" | "}
				<FilterLink filter={SHOW_ACTIVE}>Active</FilterLink>{" | "}
				<FilterLink filter={SHOW_COMPLETED}>Completed</FilterLink>
			</p>
		);
	}
}