import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Movie } from './movie.model';
import { MovieActions, MovieActionTypes } from './movie.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';

/**
 * When using Entity the store state extends EntityState with the model
 * that will be stored as entity provided. (Movie) in this case.
 * If you want to store two separate data models and use Entity you have to create
 * SEPARATE store state or substate.
 */
export interface MovieState extends EntityState<Movie> {
  // additional entities state properties
  selectedMovieId: string;
  loading: boolean;
  error: string;
}

/**
 * The EntityAdapter provides methods for handling the state operations with entities.
 */
export const adapter: EntityAdapter<Movie> = createEntityAdapter<Movie>();

export const initialMoviesState: MovieState = adapter.getInitialState({
  // additional entity state properties
  // Notice you do not have to provide initial state for ids and entities
  // The adapter takes care of that
  selectedMovieId: null,
  loading: false,
  error: null
});

export function movieReducer(state = initialMoviesState, action: MovieActions): MovieState {
  switch (action.type) {
    case MovieActionTypes.LoadMovies: {
      return {
        ...state,
        loading: true,
        error: initialMoviesState.error
      };
    }

    case MovieActionTypes.LoadMoviesSuccess: {
      return adapter.addAll(action.payload.movies, { ...state, loading: initialMoviesState.loading });
    }

    case MovieActionTypes.LoadMoviesFail: {
      return {
        ...state,
        loading: initialMoviesState.loading,
        error: action.payload.error
      };
    }

    case MovieActionTypes.SelectMovie: {
      return {
        ...state,
        selectedMovieId: action.payload.id
      };
    }

    /**
     * Example methods that are provided by the adapter
     */
    case MovieActionTypes.AddMovie: {
      return adapter.addOne(action.payload.movie, state);
    }

    case MovieActionTypes.UpsertMovie: {
      return adapter.upsertOne(action.payload.movie, state);
    }

    case MovieActionTypes.AddMovies: {
      return adapter.addMany(action.payload.movies, state);
    }

    case MovieActionTypes.UpsertMovies: {
      return adapter.upsertMany(action.payload.movies, state);
    }

    case MovieActionTypes.UpdateMovie: {
      return adapter.updateOne(action.payload.movie, state);
    }

    case MovieActionTypes.UpdateMovies: {
      return adapter.updateMany(action.payload.movies, state);
    }

    case MovieActionTypes.DeleteMovie: {
      return adapter.removeOne(action.payload.id, state);
    }

    case MovieActionTypes.DeleteMovies: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case MovieActionTypes.ClearMovies: {
      return adapter.removeAll({ ...state, loading: initialMoviesState.loading });
    }

    default: {
      return state;
    }
  }
}

/**
 * This is hot to create the main selector for lazyLoaded feature state.
 * 'movies' is the same string we provided in movies.module
 */
const selectMoviesFeatureState = createFeatureSelector<MovieState>('movies');
/**
 * All helper selectors provided by the adapter.
 * selectAll returns Array list of all stored movies.
 */
const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors(selectMoviesFeatureState);

/**
 * Example for combined state. An easy way to return the whole state to components.
 */
export const selectMoviesCombinedState = createSelector(
  selectMoviesFeatureState,
  selectAll,
  (state: MovieState, list: Movie[]) => {
    return { ...state, list };
  }
);
