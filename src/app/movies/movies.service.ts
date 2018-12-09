import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './store/movie.model';
import { map } from 'rxjs/operators';

@Injectable()
export class MoviesService {
  constructor(private _http: HttpClient) {}

  getMovies() {}
}
