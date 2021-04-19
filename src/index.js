import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { composeWithDevTools } from "redux-devtools-extension";

import reducer from './reducer'

import App from './components/App';

import './index.css';

const initialState = {
	"query": '',
	"queryResults": {},
	"principalFeed": [],
	"profile": []
}

const store = createStore(
	reducer, 
	initialState, 
	composeWithDevTools()
)

ReactDOM.render(
 	<Provider store={store}>
		<App />
 	</Provider>,
	document.getElementById('root')
);
