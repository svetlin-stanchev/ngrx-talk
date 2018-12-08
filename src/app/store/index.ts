import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';

import * as fromSidebar from './sidebar/sidebar.reducer';

export * from './sidebar/sidebar.actions';
export * from './sidebar/sidebar.reducer';

export interface AppState {
  sidebar: fromSidebar.SidebarState;
}

export const reducers: ActionReducerMap<AppState> = {
  sidebar: fromSidebar.reducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
