import { AppState } from '../';
import { Сurrency, СurrencyPeriod } from '../types/Сurrency';

export const selectEurLoading = (state: AppState): boolean => state.eur.loading;
export const selectEurSuccess = (state: AppState): boolean => state.eur.success;
export const selectEurGet = (state: AppState): Сurrency | undefined => state.eur.eur;

export const selectEursPeriodSuccess = (state: AppState): boolean => state.eur.success;
export const selectEursPeriodGet = (state: AppState): СurrencyPeriod[] | undefined => state.eur.eurs;
