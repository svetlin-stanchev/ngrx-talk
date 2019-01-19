import { GlobalActions, GlobalActionTypes } from './global.actions';
import { AppState } from '..';
import { createSelector } from '@ngrx/store';

export interface GlobalState {
  globalData: string;
}

export const initialState: GlobalState = {
  globalData: ''
};

export function globalReducer(state = initialState, action: GlobalActions): GlobalState {
  switch (action.type) {
    case GlobalActionTypes.LoadGlobals: {
      return { ...state, globalData: action.payload.globalData };
    }
    default:
      return state;
  }
}

const selectGlobalState = (state: AppState) => state.global;

export const selectGlobalDataState = createSelector(
  selectGlobalState,
  (state) => state.globalData
);
