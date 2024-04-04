import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MOVIES } from 'src/mock/data';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private _movies: any[] = [];

  constructor(private http: HttpClient) {
    this._movies = MOVIES;
    // const headers = new HttpHeaders().set('accept', 'application/json');

    // this.http.get<any[]>(
    //   'https://api.themoviedb.org/3/authentication',
    //   { headers }
    // ).subscribe((data) => (this._movies = data));
  }

  getCatalog() {
    return this._movies;
  }
}
