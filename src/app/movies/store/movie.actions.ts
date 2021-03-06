import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Movie } from './movie.model';

/**
 * More complex enum
 */
export enum MovieActionTypes {
  LoadMovies = '[Movie] Load Movies',
  LoadMoviesSuccess = '[Movie] Load Movies Success',
  LoadMoviesFail = '[Movie] Load Movies Fail',

  SelectMovie = '[Movie] Select Movie',

  DelayedLoadMovies = '[Movie] Delayed Load Movies',

  AddMovie = '[Movie] Add Movie',
  UpsertMovie = '[Movie] Upsert Movie',
  AddMovies = '[Movie] Add Movies',
  UpsertMovies = '[Movie] Upsert Movies',
  UpdateMovie = '[Movie] Update Movie',
  UpdateMovies = '[Movie] Update Movies',
  DeleteMovie = '[Movie] Delete Movie',
  DeleteMovies = '[Movie] Delete Movies',
  ClearMovies = '[Movie] Clear Movies'
}

export class LoadMovies implements Action {
  readonly type = MovieActionTypes.LoadMovies;
}

/**
 * Example action with provided payload. Do not change the name of the property.
 * ALWAYS provide payload (named payload) when needed.
 */
export class LoadMoviesSuccess implements Action {
  readonly type = MovieActionTypes.LoadMoviesSuccess;

  constructor(public payload: { movies: Movie[] }) {}
}

export class LoadMoviesFail implements Action {
  readonly type = MovieActionTypes.LoadMoviesFail;

  /**
   * @param payload a good practice is to provide the payload as an Object and type
   * Object property for clarity. Other approach is to just use payload: string
   */
  constructor(public payload: { error: string }) {}
}

export class SelectMovie implements Action {
  readonly type = MovieActionTypes.SelectMovie;

  constructor(public payload: { id: string }) {}
}

export class DelayedLoadMovies implements Action {
  readonly type = MovieActionTypes.DelayedLoadMovies;
}

export class AddMovie implements Action {
  readonly type = MovieActionTypes.AddMovie;

  constructor(public payload: { movie: Movie }) {}
}

export class UpsertMovie implements Action {
  readonly type = MovieActionTypes.UpsertMovie;

  constructor(public payload: { movie: Movie }) {}
}

export class AddMovies implements Action {
  readonly type = MovieActionTypes.AddMovies;

  constructor(public payload: { movies: Movie[] }) {}
}

export class UpsertMovies implements Action {
  readonly type = MovieActionTypes.UpsertMovies;

  constructor(public payload: { movies: Movie[] }) {}
}

export class UpdateMovie implements Action {
  readonly type = MovieActionTypes.UpdateMovie;

  constructor(public payload: { movie: Update<Movie> }) {}
}

export class UpdateMovies implements Action {
  readonly type = MovieActionTypes.UpdateMovies;

  constructor(public payload: { movies: Update<Movie>[] }) {}
}

export class DeleteMovie implements Action {
  readonly type = MovieActionTypes.DeleteMovie;

  constructor(public payload: { id: string }) {}
}

export class DeleteMovies implements Action {
  readonly type = MovieActionTypes.DeleteMovies;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearMovies implements Action {
  readonly type = MovieActionTypes.ClearMovies;
}

export type MovieActions =
  | LoadMovies
  | LoadMoviesSuccess
  | LoadMoviesFail
  | SelectMovie
  | DelayedLoadMovies
  | AddMovie
  | UpsertMovie
  | AddMovies
  | UpsertMovies
  | UpdateMovie
  | UpdateMovies
  | DeleteMovie
  | DeleteMovies
  | ClearMovies;
