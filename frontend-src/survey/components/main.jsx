import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Main extends Component {

	constructor(props) {
		super(props);

		this.state = {
			
		};
	}


	render() {
		return (
			<div className="main">
				Survey main
			</div>

		);
	}
};

Main.propTypes = {
	// appState: PropTypes.string,
	// inductees: PropTypes.array,
	// timingOut: PropTypes.bool,

	// loadInductees: PropTypes.func,
	// resetTimeout: PropTypes.func,
	// setAppState: PropTypes.func,
	// sortInductees: PropTypes.func
};
