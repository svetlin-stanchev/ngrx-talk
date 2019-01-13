import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { MoviesService } from './movies.service';

import * as fromMovie from './store';

@NgModule({
  declarations: [MoviesComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    /**
     * This is how to register store for lazyLoaded module.
     * 'movies' is the name under which we can find the store in redux extension.
     * Provided reducer can be reducerMap if it is a complex state with substates.
     */
    StoreModule.forFeature('movies', fromMovie.movieReducer),
    /**
     * This is how to register effects for lazyLoaded module.
     */
    EffectsModule.forFeature([fromMovie.MovieEffects])
  ],
  providers: [MoviesService]
})
export class MoviesModule {}
