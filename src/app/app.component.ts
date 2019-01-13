import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from './store';
import { Store, select } from '@ngrx/store';

import * as fromStore from './store/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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
  }

  toggleSidebar() {
    /**
     * How to manually dispatch action from the component
     */
    this._store$.dispatch(new fromStore.ToggleSidebar());
  }
}
