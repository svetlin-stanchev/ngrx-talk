import { SidebarActions, SidebarActionTypes } from './sidebar.actions';
import { createSelector } from '@ngrx/store';
import { AppState } from '../index';

/**
 * Describe the specific reducer state
 */
export interface SidebarState {
  isShown: boolean;
}

/**
 * Initial state of the store section
 */
export const initialSidebarState: SidebarState = {
  isShown: false
};

/**
 * Pure function of the actual reducer - notice singular form (reducer) and NOT (reducers)
 * @param state current SidebarState. If no current SidebarState use initialSidebarState
 * @param action typed with the exported type SidebarActions
 */
export function sidebarReducer(state = initialSidebarState, action: SidebarActions): SidebarState {
  switch (action.type) {
    case SidebarActionTypes.ToggleSidebar:
      return {
        ...state,
        isShown: !state.isShown
      };

    /**
     * default state should ALWAYS be provided.
     * ALL actions pass through ALL registered reducers so if the action is not handled
     * the state SHOULD NOT be changed.
     */
    default:
      return state;
  }
}

/**
 * Basic way to get subset of complex state with multiple substates
 * @param state the actual AppState
 */
const selectSidebarState = (state: AppState) => state.sidebar;

/**
 * Use the above selector in createSelector to get even more fine section of the state
 */
export const selectSidebarToggleState = createSelector(
  selectSidebarState,
  (state) => state.isShown
);
