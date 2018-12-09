import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Movie } from './store/movie.model';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable()
export class MoviesService {
  constructor(private _http: HttpClient) {}

  getMovies() {
    // let params: HttpParams = new HttpParams();
    // params = params.set('y', '2018');
    // params = params.set('apikey', environment.OMDbAPI || '');
    // return this._http.get('http://www.omdbapi.com/', { params }).pipe();
  }
}
