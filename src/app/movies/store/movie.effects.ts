import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { StoreHelperService } from 'src/app/store-helper.service';
import { MovieActionTypes, LoadMoviesFail, LoadMoviesSuccess, MovieActions } from './movie.actions';
import { MoviesService } from '../movies.service';

import * as fromReducer from '../../store';

@Injectable()
export class MovieEffects {
  @Effect()
  loadMovies$: Observable<MovieActions> =
    /**
     * this._actions$ is a stream of MovieActions.
     * Each Effect listens to that stream.
     */
    this._actions$.pipe(
      /**
       * We filter the actions using ofType() where we provide the action we want to filter by.
       * We can provide more that one action to listen to.
       */
      ofType(MovieActionTypes.LoadMovies),
      /**
       * switchMap triggers the actual async operation.
       * Here we can use the payload of the action in the API call for example
       */
      switchMap((action) =>
        this._moviesService.getMovies().pipe(
          /**
           * when the API call returns result we map() it to success action
           */
          map((movies) => new LoadMoviesSuccess({ movies })),
          /**
           * If for some reason we want more than one action dispatched
           * we use switchMap instead of map and return an Array of new actions like shown below.
           */
          // switchMap((movies) => [new LoadMoviesSuccess({ movies }), new SomeOtherAction({ movies })])
          /**
           * If the API call returns an error we map it to Observable of the fail action
           */
          catchError((error) => of(new LoadMoviesFail({ error })))
        )
      )
    );

  @Effect()
  getTheMoviesInDelayedAction$: Observable<any> = this._actions$.pipe(
    ofType(MovieActionTypes.DelayedLoadMovies),
    switchMap(
      (action) =>
        this._storeHelperService.waitForAsyncSelector(this._globalStore$, fromReducer.selectGlobalDataState, null),
      /**
       * This switch will be called in 5 seconds, when the global store data has been populated.
       * Instead of dispatching action we can do another API call here based on globalData and actionPayload.
       */
      switchMap(([globalData, actionPayload]) => [
        new LoadMoviesSuccess({ movies: [{ id: '3', name: 'Dummy', posterUrl: '' }] })
      ])
    )
  );

  constructor(
    private _actions$: Actions,
    private _moviesService: MoviesService,
    private _storeHelperService: StoreHelperService,
    private _globalStore$: Store<fromReducer.GlobalState>
  ) {}
}
