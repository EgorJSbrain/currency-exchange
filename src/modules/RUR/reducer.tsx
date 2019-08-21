import { Сurrency, СurrencyPeriod } from '../types';
import { RurAction } from './actions';
import {
    RUR_GET_REQUEST,
    RUR_GET_SUCCESS,
    RUR_GET_FAILURE,
    RUR_GET_PERIOD_REQUEST,
    RUR_GET_PERIOD_FAILURE,
    RUR_GET_PERIOD_SUCCESS,
} from './constants';

export interface RurState {
    loading: boolean;
    success: boolean;
    rur?: Сurrency;
    rurs?: СurrencyPeriod[];
}

const initialState: RurState = {
    loading: false,
    success: false,
};

export const rurReducer = (state: RurState = initialState, action: RurAction) => {
    switch (action.type) {
        case RUR_GET_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case RUR_GET_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                rur: action.rur,
            };
        case RUR_GET_FAILURE:
            return {
                ...state,
                loading: false,
                success: false,
                rur: undefined,
            };
        case RUR_GET_PERIOD_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case RUR_GET_PERIOD_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                rurs: action.rurs,
            };
        case RUR_GET_PERIOD_FAILURE:
            return {
                ...state,
                loading: false,
                success: false,
                rurs: undefined,
            };
        default:
            return state;
    }
};
