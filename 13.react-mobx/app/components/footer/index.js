import React from 'react';
import { observer } from 'mobx-react';
import Link from './Link.js';
import visibilityStore from '../../stores/visibilityStore.js';
const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } = visibilityStore.SATUS;

@observer
export default class extends React.Component {
	render(){
		return (
			<p>
				Show: {" "}
				<Link active={ SHOW_ALL === visibilityStore.filter } changeState={ ()=>visibilityStore.changeActive(SHOW_ALL) }>All</Link>{" | "}
				<Link active={ SHOW_ACTIVE === visibilityStore.filter } changeState={()=>visibilityStore.changeActive(SHOW_ACTIVE) }>Active</Link>{" | "}
				<Link active={ SHOW_COMPLETED === visibilityStore.filter } changeState={()=>visibilityStore.changeActive(SHOW_COMPLETED) }>Completed</Link>
			</p>
		);
	}
}