import {
    USD_GET_REQUEST,
    USD_GET_SUCCESS,
    USD_GET_FAILURE,
    USD_GET_PERIOD_REQUEST,
    USD_GET_PERIOD_SUCCESS,
    USD_GET_PERIOD_FAILURE,
} from './constants';
import { Сurrency, СurrencyPeriod } from '../types';

export interface UsdGetRequest {
    type: typeof USD_GET_REQUEST;
    cur_id: number;
    date: string;
    param_mode: number;
  }

export interface UsdGetSuccess {
    type: typeof USD_GET_SUCCESS;
    usd: Сurrency;
}

export interface UsdGetFailure {
    type: typeof USD_GET_FAILURE;
}

export interface UsdGetPeriodRequest {
    type: typeof USD_GET_PERIOD_REQUEST;
    cur_id: number;
    startDate: string;
    endDate: string;
}

export interface UsdGetPeriodSuccess {
    type: typeof USD_GET_PERIOD_SUCCESS;
    usds: СurrencyPeriod[] | undefined;
}

export interface UsdGetPeriodFailure {
    type: typeof USD_GET_PERIOD_FAILURE;
}

export type UsdAction = UsdGetRequest | UsdGetSuccess | UsdGetFailure | UsdGetPeriodRequest | UsdGetPeriodSuccess | UsdGetPeriodFailure;

export const usdGetRequest = (cur_id: number, date: string, param_mode: number): UsdGetRequest => ({
    type: USD_GET_REQUEST,
    cur_id,
    date,
    param_mode,
});

export const usdGetSuccess = (usd: Сurrency): UsdGetSuccess => ({
    type: USD_GET_SUCCESS,
    usd,
});

export const usdGetFailure = (): UsdGetFailure => ({
    type: USD_GET_FAILURE,
});

export const usdGetPeriodRequest = (cur_id: number, startDate: string, endDate: string): UsdGetPeriodRequest => ({
    type: USD_GET_PERIOD_REQUEST,
    cur_id,
    startDate,
    endDate,
});

export const usdGetPeriodSuccess = (usds: СurrencyPeriod[] | undefined): UsdGetPeriodSuccess => ({
    type: USD_GET_PERIOD_SUCCESS,
    usds,
});

export const usdGetPeriodFailure = (): UsdGetPeriodFailure => ({
    type: USD_GET_PERIOD_FAILURE,
});