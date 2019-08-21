import { call, put } from 'redux-saga/effects';
import {
    METHOD_GET,
    requestBuilder,
} from '../../../helpers/requestBuilder';
import {
    errorFailure,
    errorSuccess,
} from '../../error';
import { Error } from '../../types';
import {
    UsdGetRequest, usdGetSuccess, usdGetFailure, UsdGetPeriodRequest, usdGetPeriodSuccess,
} from '../actions';

export function* UsdRequestSaga(action: UsdGetRequest) {
    try {
        const data = yield call(
            requestBuilder,
            `/Rates/${action.cur_id}?onDate=${action.date}&ParamMode=0`,
            METHOD_GET,
            {}
        );
        if (data.data.Error) {
            const err: Error = {
                error: true,
                text: data.data.Error,
            };
            yield put(usdGetFailure());
            yield put(errorSuccess(err));
        } else {
            yield put(usdGetSuccess(data.data));
            yield put(errorFailure());
        }
    } catch (error) {
        const err: Error = {
            error: true,
            text: 'Request failure',
        };
        yield put(errorSuccess(err));
    }
}

export function* UsdRequestSagaPeriod(action: UsdGetPeriodRequest) {
    try {
        const data = yield call(
            requestBuilder,
            `/Rates/Dynamics/${action.cur_id}?startDate=${action.startDate}&endDate=${action.endDate}`,
            METHOD_GET,
            {}
        );
        if (data.data.Error) {
            const err: Error = {
                error: true,
                text: data.data.Error,
            };
            yield put(usdGetFailure());
            yield put(errorSuccess(err));
        } else {
            yield put(usdGetPeriodSuccess(data.data));
            yield put(errorFailure());
        }
    } catch (error) {
        const err: Error = {
            error: true,
            text: 'Request failure',
        };
        yield put(errorSuccess(err));
    }
}