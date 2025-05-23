import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { createReduxHistoryContext } from 'redux-first-history';
import { createBrowserHistory } from 'history';

import hotelsReducer from './hotels/hotelsSlice';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
export const browserHistory = createBrowserHistory();

const {
    createReduxHistory,
    routerMiddleware,
    routerReducer,
} = createReduxHistoryContext({
    history: browserHistory,
    reduxTravelling: true,
});

export const store = configureStore({
    reducer: {
        router: routerReducer,
        hotels: hotelsReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(routerMiddleware).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export const history = createReduxHistory(store);
