import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './store/movie.model';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable()
export class MoviesService {
  constructor() {}

  getMovies(): Observable<Movie[]> {
    const movies: Movie[] = [{ id: '1' }, { id: '2' }];
    return of(movies);
  }
}
