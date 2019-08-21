import { Error } from '../types';
import { ErrorAction } from './actions';
import {
    ERROR_FAILURE,
    ERROR_SUCCESS,
} from './constants';

export interface ErrorState {
    loading: boolean;
    success: boolean;
    error?: Error;
}

const initialState: ErrorState = {
    loading: false,
    success: false,
};

export const errorReducer = (state: ErrorState = initialState, action: ErrorAction) => {
    switch (action.type) {
        case ERROR_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                error: action.error,
            };
        case ERROR_FAILURE:
            return {
                ...state,
                loading: false,
                success: false,
                error: undefined,
            };
        default:
            return state;
    }
};
