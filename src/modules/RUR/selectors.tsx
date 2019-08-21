import { AppState } from '../';
import { Сurrency, СurrencyPeriod } from '../types/Сurrency';

export const selectRurLoading = (state: AppState): boolean => state.rur.loading;
export const selectRurSuccess = (state: AppState): boolean => state.rur.success;
export const selectRurGet = (state: AppState): Сurrency | undefined => state.rur.rur;

export const selectRursPeriodSuccess = (state: AppState): boolean => state.rur.success;
export const selectRursPeriodGet = (state: AppState): СurrencyPeriod[] | undefined => state.rur.rurs;
