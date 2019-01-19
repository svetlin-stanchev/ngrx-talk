import { Action } from '@ngrx/store';

export enum GlobalActionTypes {
  LoadGlobals = '[Global] Load Globals'
}

export class LoadGlobals implements Action {
  readonly type = GlobalActionTypes.LoadGlobals;

  constructor(public payload: { globalData: string }) {}
}

export type GlobalActions = LoadGlobals;
