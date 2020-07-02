import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import listReducer from '../reducer';

const rootReducer = combineReducers({ listReducer });

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

export default store;
