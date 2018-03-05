import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Link from '../components/Link.js';

const mapStateToProps = (state, ownProps) => {
	return {
		active: ownProps.filter === state.visibilityFilter
	};
};

const mapDispatchProps = (dispatch, ownProps) => {
	return {
		changeState: () => {
			dispatch(setVisibilityFilter(ownProps.filter))
		}
	}
};

export default connect(mapStateToProps, mapDispatchProps)(Link);