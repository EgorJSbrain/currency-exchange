import { Error } from '../types';
import {
    ERROR_FAILURE,
    ERROR_SUCCESS,
} from './constants';

export interface ErrorSuccess {
    type: typeof ERROR_SUCCESS;
    error: Error;
}

export interface ErrorFailure {
    type: typeof ERROR_FAILURE;
}
export type ErrorAction = ErrorSuccess | ErrorFailure;

export const errorSuccess = (error: Error): ErrorSuccess => ({
    type: ERROR_SUCCESS,
    error,
});

export const errorFailure = (): ErrorFailure => ({
    type: ERROR_FAILURE,
});
