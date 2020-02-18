import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

// sagaMiddleware.run()

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
