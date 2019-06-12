/* eslint-disable no-undef */
import { createContext } from 'react';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
const enhancers = composeWithDevTools(applyMiddleware(sagaMiddleware));

const store = createStore(rootReducer, {}, enhancers);
sagaMiddleware.run(rootSaga);
const StoreContext = createContext(store);

export default StoreContext;
