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
    this.sidebarToggleState$ = this._store$.pipe(select(fromStore.selectSidebarToggleState));
  }

  toggleSidebar() {
    this._store$.dispatch(new fromStore.ToggleSidebar());
  }
}
