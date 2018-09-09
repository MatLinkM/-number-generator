import { createStore, compose, applyMiddleware } from 'redux';
import  createSagaMiddleware  from 'redux-saga';

import reducers from './ducks';
import sagas from './sagas';

const middleware = [];

const sagaMiddleware = createSagaMiddleware();

middleware.push(sagaMiddleware);

const createAppropriateStore =
  process.env.NODE_ENV === 'development' ? console.tron.createStore : createStore;

  const store = createAppropriateStore(reducers, compose(applyMiddleware(...middleware)));

sagaMiddleware.run(sagas);

export default store
