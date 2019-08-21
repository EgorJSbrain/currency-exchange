import {
    RUR_GET_REQUEST,
    RUR_GET_SUCCESS,
    RUR_GET_FAILURE,
    RUR_GET_PERIOD_REQUEST,
    RUR_GET_PERIOD_FAILURE,
    RUR_GET_PERIOD_SUCCESS,
} from './constants';
import { Сurrency, СurrencyPeriod } from '../types';

export interface RurGetRequest {
    type: typeof RUR_GET_REQUEST;
    cur_id: number;
    date: string;
    param_mode: number;
}

export interface RurGetPeriodRequest {
    type: typeof RUR_GET_PERIOD_REQUEST;
    cur_id: number;
    startDate: string;
    endDate: string;
}

export interface RurGetSuccess {
    type: typeof RUR_GET_SUCCESS;
    rur: Сurrency;
}

export interface RurGetPeriodSuccess {
    type: typeof RUR_GET_PERIOD_SUCCESS;
    rurs: СurrencyPeriod[] | undefined;
}

export interface RurGetFailure {
    type: typeof RUR_GET_FAILURE;
}

export interface RurGetPeriodFailure {
    type: typeof RUR_GET_PERIOD_FAILURE;
}

export type RurAction = RurGetRequest | RurGetSuccess | RurGetFailure | RurGetPeriodRequest | RurGetPeriodSuccess | RurGetPeriodFailure;

export const rurGetRequest = (cur_id: number, date: string, param_mode: number): RurGetRequest => ({
    type: RUR_GET_REQUEST,
    cur_id,
    date,
    param_mode
});

export const rurGetSuccess = (rur: Сurrency): RurGetSuccess => ({
    type: RUR_GET_SUCCESS,
    rur,
});

export const rurGetFailure = (): RurGetFailure => ({
    type: RUR_GET_FAILURE,
});

export const rurGetPeriodRequest = (cur_id: number, startDate: string, endDate: string): RurGetPeriodRequest => ({
    type: RUR_GET_PERIOD_REQUEST,
    cur_id,
    startDate,
    endDate,
});

export const rurGetPeriodSuccess = (rurs: СurrencyPeriod[] | undefined): RurGetPeriodSuccess => ({
    type: RUR_GET_PERIOD_SUCCESS,
    rurs,
});

export const rurGetPeriodFailure = (): RurGetPeriodFailure => ({
    type: RUR_GET_PERIOD_FAILURE,
});