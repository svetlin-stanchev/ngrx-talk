import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';
import { AppState } from './store';

import * as fromStore from './store/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('slideInOut', [
      state(
        'in',
        style({
          transform: 'translate3d(0, 0, 0)'
        })
      ),
      state(
        'out',
        style({
          transform: 'translate3d(100%, 0, 0)'
        })
      ),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = 'ngrx-talk';
  sidebarToggleState$: Observable<boolean>;

  constructor(private _store$: Store<AppState>) {}

  ngOnInit() {
    /**
     * Get the selected data from store selector into the component.
     * The subscribe() needed here is done via | async pipe in the component.
     * Async pipe is the preferred method of subscribing to store selectors
     */
    this.sidebarToggleState$ = this._store$.pipe(select(fromStore.selectSidebarToggleState));

    /**
     * This action will be delayed for 5 seconds to mimic slow async operation.
     * The result store of this action will be used in movie.effects
     */
    setTimeout(() => {
      const globalData = 'globalData';
      this._store$.dispatch(new fromStore.LoadGlobals({ globalData }));
    }, 5000);
  }

  toggleSidebar() {
    /**
     * How to manually dispatch action from the component
     */
    this._store$.dispatch(new fromStore.ToggleSidebar());
  }
}
