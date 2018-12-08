import { Action } from '@ngrx/store';

export enum SidebarActionTypes {
  ToggleSidebar = '[Sidebar] Toggle Sidebar'
}

export class ToggleSidebar implements Action {
  readonly type = SidebarActionTypes.ToggleSidebar;
}

export type SidebarActions = ToggleSidebar;
