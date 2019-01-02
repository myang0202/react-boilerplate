import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Welcome extends Component {

	constructor(props) {
		super(props);

		this.state = {

		};
	}


	render() {
		return (
			<div className="main">
				Weclome
			</div>

		);
	}
};

Welcome.propTypes = {
	// appState: PropTypes.string,
	// inductees: PropTypes.array,
	// timingOut: PropTypes.bool,

	// loadInductees: PropTypes.func,
	// resetTimeout: PropTypes.func,
	// setAppState: PropTypes.func,
	// sortInductees: PropTypes.func
};
