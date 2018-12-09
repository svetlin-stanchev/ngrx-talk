import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Movie } from './movie.model';
import { MovieActions, MovieActionTypes } from './movie.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface MovieState extends EntityState<Movie> {
  // additional entities state properties
  loading: boolean;
  error: string;
}

export const adapter: EntityAdapter<Movie> = createEntityAdapter<Movie>();

export const initialMoviesState: MovieState = adapter.getInitialState({
  // additional entity state properties
  loading: false,
  error: null
});

export function reducer(state = initialMoviesState, action: MovieActions): MovieState {
  switch (action.type) {
    case MovieActionTypes.LoadMovies: {
      return {
        ...state,
        loading: true,
        error: initialMoviesState.error
      };
    }

    case MovieActionTypes.LoadMoviesSuccess: {
      return adapter.addAll(action.payload.movies, state);
    }

    case MovieActionTypes.LoadMoviesFail: {
      return {
        ...state,
        loading: initialMoviesState.loading,
        error: action.payload
      };
    }

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
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}

const selectMoviesFeatureState = createFeatureSelector<MovieState>('movie');
const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors(selectMoviesFeatureState);
export const selectMoviesCombinedState = createSelector(
  selectMoviesFeatureState,
  selectAll,
  (state: MovieState, list: Movie[]) => {
    return { ...state, list };
  }
);
