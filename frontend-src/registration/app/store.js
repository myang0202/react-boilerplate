import {
	createStore,
	applyMiddleware,
	compose
} from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
	
};

const AppReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

const AppStore = createStore(AppReducer, composeEnhancers(applyMiddleware(thunk)));

export default AppStore;
