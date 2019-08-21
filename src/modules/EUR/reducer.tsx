import { Сurrency, СurrencyPeriod } from '../types';
import { EurAction } from './actions';
import {
    EUR_GET_REQUEST,
    EUR_GET_SUCCESS,
    EUR_GET_FAILURE,
    EUR_GET_PERIOD_REQUEST,
    EUR_GET_PERIOD_SUCCESS,
} from './constants';

export interface EurState {
    loading: boolean;
    success: boolean;
    eur?: Сurrency;
    eurs?: СurrencyPeriod[];
}

const initialState: EurState = {
    loading: false,
    success: false,
};

export const eurReducer = (state: EurState = initialState, action: EurAction) => {
    switch (action.type) {
        case EUR_GET_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case EUR_GET_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                eur: action.eur,
            };
        case EUR_GET_FAILURE:
            return {
                ...state,
                loading: false,
                success: false,
                eur: undefined,
            };
        case EUR_GET_PERIOD_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case EUR_GET_PERIOD_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                eurs: action.eurs,
            };
        default:
            return state;
    }
};
