import { AppState } from '../';
import { Error } from '../types/Error';

export const selectError = (state: AppState): Error | undefined => state.error.error;
