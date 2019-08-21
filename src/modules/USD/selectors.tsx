import { AppState } from '../';
import { Сurrency, СurrencyPeriod } from '../types/Сurrency';

export const selectUsdLoading = (state: AppState): boolean => state.usd.loading;
export const selectUsdSuccess = (state: AppState): boolean => state.usd.success;
export const selectUsdGet = (state: AppState): Сurrency | undefined => state.usd.usd;

export const selectUsdsPeriodSuccess = (state: AppState): boolean => state.usd.success;
export const selectUsdsPeriodGet = (state: AppState): СurrencyPeriod[] | undefined => state.usd.usds;