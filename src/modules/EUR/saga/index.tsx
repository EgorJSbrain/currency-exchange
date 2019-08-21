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
    EurGetRequest, eurGetSuccess, eurGetFailure, EurGetPeriodRequest, eurGetPeriodSuccess,
} from '../actions';

export function* EurRequestSaga(action: EurGetRequest) {
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
            yield put(eurGetFailure());
            yield put(errorSuccess(err));
        } else {
            yield put(eurGetSuccess(data.data));
            yield put(errorFailure());
        }
    } catch (error) {
        const err: Error = {
            error: true,
            text: 'Request failure',
        };
        yield put(errorSuccess(err));
    }
};

export function* EurRequestSagaPeriod(action: EurGetPeriodRequest) {
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
            yield put(eurGetFailure());
            yield put(errorSuccess(err));
        } else {
            yield put(eurGetPeriodSuccess(data.data));
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
