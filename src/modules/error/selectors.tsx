import { AppState } from '../../../../../bot-kits-new-version/botkits-frontend/src/modules';
import { Error } from '../types/Error';

export const selectError = (state: AppState): Error | undefined => state.error.error;
