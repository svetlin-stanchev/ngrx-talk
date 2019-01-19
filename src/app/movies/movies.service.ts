import { Injectable } from '@angular/core';
import { Movie } from './store/movie.model';
import { Observable, of } from 'rxjs';

@Injectable()
export class MoviesService {
  constructor() {}

  getMovies(): Observable<Movie[]> {
    const movies: Movie[] = [
      {
        id: '1',
        name: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
        posterUrl:
          'https://m.media-amazon.com/images/M/MV5BZWI3ZTMxNjctMjdlNS00NmUwLWFiM2YtZDUyY2I3N2MxYTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,643,1000_AL_.jpg'
      },
      {
        id: '2',
        name: 'Star Wars: Episode VI - Return of the Jedi',
        posterUrl:
          'https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY999_CR0,0,644,999_AL_.jpg'
      }
    ];
    return of(movies);
  }
}
