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
    StoreModule.forFeature('movies', fromMovie.reducer),
    EffectsModule.forFeature([fromMovie.MovieEffects])
  ],
  providers: [MoviesService]
})
export class MoviesModule {}
