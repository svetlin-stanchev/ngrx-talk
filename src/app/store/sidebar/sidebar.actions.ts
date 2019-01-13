import { Action } from '@ngrx/store';

/**
 * Action enum.
 * Used in the case statements of the reducer in order to handle specific action
 */
export enum SidebarActionTypes {
  ToggleSidebar = '[Sidebar] Toggle Sidebar'
}

/**
 * Actual action instance.
 * New ince is create when we dispatch the action.
 * Can have a payload to carry specific data.
 */
export class ToggleSidebar implements Action {
  readonly type = SidebarActionTypes.ToggleSidebar;
}

/**
 * Type for the actions.
 * Used to type the actions in the reducer.
 */
export type SidebarActions = ToggleSidebar;
