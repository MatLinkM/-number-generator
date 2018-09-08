import { createStore, compose, applyMiddleware } from 'redux';
import  createSagaMiddleware  from 'redux-saga';

import reducers from './reducers';
import sagas from './sagas';

const middleware = [];

const sagaMiddleware = createSagaMiddleware();

middleware.push(sagaMiddleware);

const store = createStore(reducers, compose(applyMiddleware(...middleware)));

export default store
