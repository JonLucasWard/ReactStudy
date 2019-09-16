import { Store, createStore, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk'; //Middleware to call action creators to return functions instead of actions
import logger from 'redux-logger'; // Allows you to "replay" redux actions and go through app states
import { state } from './reducers'; //referring to module package of redux

const a: any = window; // establish the window for display, your browser
const composeEnhancers = a.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //connect to middleware
//in this case, connecting to Redux DevTools on google chrome, so that the extension can help us

const enhancer = composeEnhancers( // add enhancers to make things easier or give more functionality
    applyMiddleware(reduxThunk, logger),
    // other store enhancers if any
);

export const store: Store<any> = createStore( //create a store that has states and applied middleware
    state,
    enhancer
);
