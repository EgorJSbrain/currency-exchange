import {
    EUR_GET_REQUEST,
    EUR_GET_SUCCESS,
    EUR_GET_FAILURE,
    EUR_GET_PERIOD_REQUEST,
    EUR_GET_PERIOD_FAILURE,
    EUR_GET_PERIOD_SUCCESS,
} from './constants';
import { Сurrency, СurrencyPeriod } from '../types';

export interface EurGetRequest {
    type: typeof EUR_GET_REQUEST;
    cur_id: number;
    date: string;
    param_mode: number;
}

export interface EurGetPeriodRequest {
    type: typeof EUR_GET_PERIOD_REQUEST;
    cur_id: number;
    startDate: string;
    endDate: string;
}

export interface EurGetSuccess {
    type: typeof EUR_GET_SUCCESS;
    eur: Сurrency;
}

export interface EurGetPeriodSuccess {
    type: typeof EUR_GET_PERIOD_SUCCESS;
    eurs: СurrencyPeriod[] | undefined;
}

export interface EurGetFailure {
    type: typeof EUR_GET_FAILURE;
}

export interface EurGetPeriodFailure {
    type: typeof EUR_GET_PERIOD_FAILURE;
}

export type EurAction = EurGetRequest | EurGetSuccess | EurGetFailure | EurGetPeriodRequest | EurGetPeriodSuccess | EurGetPeriodFailure;

export const eurGetRequest = (cur_id: number, date: string, param_mode: number): EurGetRequest => ({
    type: EUR_GET_REQUEST,
    cur_id,
    date,
    param_mode
});

export const eurGetSuccess = (eur: Сurrency): EurGetSuccess => ({
    type: EUR_GET_SUCCESS,
    eur,
});

export const eurGetFailure = (): EurGetFailure => ({
    type: EUR_GET_FAILURE,
});

export const eurGetPeriodRequest = (cur_id: number, startDate: string, endDate: string): EurGetPeriodRequest => ({
    type: EUR_GET_PERIOD_REQUEST,
    cur_id,
    startDate,
    endDate,
});

export const eurGetPeriodSuccess = (eurs: СurrencyPeriod[] | undefined): EurGetPeriodSuccess => ({
    type: EUR_GET_PERIOD_SUCCESS,
    eurs,
});

export const eurGetPeriodFailure = (): EurGetPeriodFailure => ({
    type: EUR_GET_PERIOD_FAILURE,
});