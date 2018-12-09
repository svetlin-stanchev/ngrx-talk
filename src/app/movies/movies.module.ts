import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { MoviesService } from './movies.service';
import { StoreModule } from '@ngrx/store';

import * as fromMovie from './store';

@NgModule({
  declarations: [MoviesComponent],
  imports: [CommonModule, MoviesRoutingModule, StoreModule.forFeature('movie', fromMovie.reducer)],
  providers: [MoviesService]
})
export class MoviesModule {}
