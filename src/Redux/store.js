import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import numberReducer from './Number/reducers';

const rootReducer = combineReducers({ numberReducer });

export const Store = createStore(rootReducer, applyMiddleware(thunk, logger));
