import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMonitor =
    process.env.NODE_ENV === 'development'
        ? console.tron.createSagaMonitor()
        : null;
const sagaMiddleWare = createSagaMiddleware({
    sagaMonitor,
});

const enhancer =
    process.env.NODE_ENV === 'development'
        ? compose(
              console.tron.createEnhancer(),
              applyMiddleware(sagaMiddleWare)
          )
        : applyMiddleware(sagaMiddleWare);

const store = createStore(rootReducer, enhancer);

sagaMiddleWare.run(rootSaga);

export default store;
