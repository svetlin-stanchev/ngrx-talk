import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromStore from './store';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesComponent implements OnInit {
  movieState$: Observable<fromStore.MovieState>;

  constructor(private _store$: Store<fromStore.MovieState>) {}

  ngOnInit() {
    this.movieState$ = this._store$.pipe(select(fromStore.selectMoviesCombinedState));
  }

  getMovies() {
    this._store$.dispatch(new fromStore.LoadMovies());
  }

  clearMovies() {
    this._store$.dispatch(new fromStore.ClearMovies());
  }
}
