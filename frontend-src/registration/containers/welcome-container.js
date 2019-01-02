import { connect } from 'react-redux';

import Welcome from 'welcome';
//import {  } from 'actions';

const mapStateToProps = (state, props) => {
	return {
		// appState: state.appState,
		// inductees: state.inductees,
		// timingOut: state.timingOut
	};
};

const mapDispatchToProps = (dispatch) => {
	// only allow toggle audit for those with permission
	return {
		// loadInductees: () => dispatch(loadInductees()),
		// resetTimeout: () => dispatch(resetTimeout()),
		// setAppState: (newState) => dispatch(setAppState(newState)), //for reset
		// setModalInductee: (inductee) => dispatch(setModalInductee(inductee)), //for reset
		// sortInductees: (sort, inductees) => dispatch(sortInductees(sort, inductees)) //for reset
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);