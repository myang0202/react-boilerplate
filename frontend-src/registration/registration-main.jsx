import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'registration.scss';

import Store from 'store';
import MainContainer from 'main-container';
import WelcomeContainer from 'welcome-container';

const routes = () => (
	<Provider store={Store}>
		<BrowserRouter>
			<Switch>
				<Route path={`/registration`} exact component={MainContainer} />
				<Route path={`/registration/welcome`} exact component={WelcomeContainer} />
			</Switch>
		</BrowserRouter>
	</Provider>
);

document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById('registration');
	var App = routes;
	
	if(routes.hot){
		App = routes.hot.accept();
	}
	
	render(<App />, root);
});
