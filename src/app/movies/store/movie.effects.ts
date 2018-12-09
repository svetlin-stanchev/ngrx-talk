import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';

import { MovieActionTypes, LoadMoviesFail, LoadMoviesSuccess, MovieActions } from './movie.actions';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { MoviesService } from '../movies.service';

@Injectable()
export class MovieEffects {
  @Effect()
  loadMovies$: Observable<MovieActions> = this._actions$.pipe(
    ofType(MovieActionTypes.LoadMovies),
    mergeMap((action) =>
      this._moviesService.getMovies().pipe(
        map((movies) => new LoadMoviesSuccess({ movies })),
        catchError((error) => of(new LoadMoviesFail({ error })))
      )
    )
  );

  constructor(private _actions$: Actions, private _moviesService: MoviesService) {}
}
