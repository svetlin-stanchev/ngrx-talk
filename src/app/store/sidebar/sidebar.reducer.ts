import { SidebarActions, SidebarActionTypes } from './sidebar.actions';
import { createSelector } from '@ngrx/store';
import { AppState } from '../index';

export interface SidebarState {
  isShown: boolean;
}

export const initialState: SidebarState = {
  isShown: false
};

export function reducer(state = initialState, action: SidebarActions): SidebarState {
  switch (action.type) {
    case SidebarActionTypes.ToggleSidebar:
      return {
        ...state,
        isShown: !state.isShown
      };

    default:
      return state;
  }
}

const selectSidebarState = (state: AppState) => state.sidebar;

export const selectSidebarToggleState = createSelector(
  selectSidebarState,
  (state) => state.isShown
);
