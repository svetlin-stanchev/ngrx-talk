import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { environment } from '../../environments/environment';

import * as fromSidebar from './sidebar/sidebar.reducer';

/**
 * Helper exports for easy access to actions and reducers
 */
export * from './sidebar/sidebar.actions';
export * from './sidebar/sidebar.reducer';

/**
 * Main app state.
 * Have the same structure as the reducerMap.
 */
export interface AppState {
  sidebar: fromSidebar.SidebarState;
  router: RouterReducerState;
}

/**
 * ReducerMap - use if there are different substates with different reducers.
 * Can be used in feature state as well in the same way
 */
export const reducerMap: ActionReducerMap<AppState> = {
  sidebar: fromSidebar.sidebarReducer,
  router: routerReducer
};

/**
 * List of metareducers
 */
export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
