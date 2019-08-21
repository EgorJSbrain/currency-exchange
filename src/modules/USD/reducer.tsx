import { Сurrency, СurrencyPeriod } from '../types';
import { UsdAction } from './actions';
import {
    USD_GET_REQUEST,
    USD_GET_SUCCESS,
    USD_GET_FAILURE,
    USD_GET_PERIOD_SUCCESS,
    USD_GET_PERIOD_REQUEST,
    USD_GET_PERIOD_FAILURE,
} from './constants';

export interface UsdState {
    loading: boolean;
    success: boolean;
    usd?: Сurrency;
    usds?: СurrencyPeriod[];
}

const initialState: UsdState = {
    loading: false,
    success: false,
};

export const usdReducer = (state: UsdState = initialState, action: UsdAction) => {
    switch (action.type) {
        case USD_GET_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case USD_GET_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                usd: action.usd,
            };
        case USD_GET_FAILURE:
            return {
                ...state,
                loading: false,
                success: false,
                usd: undefined,
            };
        case USD_GET_PERIOD_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                usds: action.usds,
            };
        case USD_GET_PERIOD_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case USD_GET_PERIOD_FAILURE:
            return {
                ...state,
                loading: false,
                success: false,
                usds: undefined,
            };
        default:
            return state;
    }
};
