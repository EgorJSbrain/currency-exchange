import {
    applyMiddleware,
    combineReducers,
    compose,
    createStore,
} from 'redux';
import { takeEvery } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import { eurReducer, EurState, EUR_GET_REQUEST, EUR_GET_PERIOD_REQUEST } from './EUR';
import { ErrorState, errorReducer } from './error';
import { usdReducer, UsdState, USD_GET_REQUEST, UsdRequestSaga, USD_GET_PERIOD_REQUEST, UsdRequestSagaPeriod } from './USD';
import { EurRequestSaga, EurRequestSagaPeriod } from './EUR/saga';
import { rurReducer, RUR_GET_REQUEST, RUR_GET_PERIOD_REQUEST, RurRequestSaga, RurRequestSagaPeriod, RurState } from './RUR';

declare global {
    // tslint:disable-next-line:no-any
    interface Window { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any; }
}

// app state interface
export interface AppState {
    error: ErrorState;
    eur: EurState;
    usd: UsdState;
    rur: RurState;
}

// preparing app reducer
export const appReducer = combineReducers({
    error: errorReducer,
    eur: eurReducer,
    usd: usdReducer,
    rur: rurReducer,
});

// preparing sagas
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function* appSaga() {
    yield takeEvery(EUR_GET_REQUEST, EurRequestSaga);
    yield takeEvery(EUR_GET_PERIOD_REQUEST, EurRequestSagaPeriod);
    yield takeEvery(USD_GET_REQUEST, UsdRequestSaga);
    yield takeEvery(USD_GET_PERIOD_REQUEST, UsdRequestSagaPeriod);
    yield takeEvery(RUR_GET_REQUEST, RurRequestSaga);
    yield takeEvery(RUR_GET_PERIOD_REQUEST, RurRequestSagaPeriod);
}

const sagaMiddleware = createSagaMiddleware();

// creating store
export const store = createStore(
    appReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);

// running all sagas
sagaMiddleware.run(appSaga);

// export default store;
