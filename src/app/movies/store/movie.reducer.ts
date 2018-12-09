import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Movie } from './movie.model';
import { MovieActions, MovieActionTypes } from './movie.actions';

export interface MoviesState extends EntityState<Movie> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Movie> = createEntityAdapter<Movie>();

export const initialState: MoviesState = adapter.getInitialState({
  // additional entity state properties
});

export function reducer(state = initialState, action: MovieActions): MoviesState {
  switch (action.type) {
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

    case MovieActionTypes.LoadMovies: {
      return adapter.addAll(action.payload.movies, state);
    }

    case MovieActionTypes.ClearMovies: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}

export const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();
