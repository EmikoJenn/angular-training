import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FOOD, FOODType } from 'src/mock/data';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  private _food: FOODType = [];

  constructor(private http: HttpClient) {
    this._food = FOOD;
    // const headers = new HttpHeaders().set('accept', 'application/json');

    // this.http.get<any[]>(
    //   'https://api.themoviedb.org/3/authentication',
    //   { headers }
    // ).subscribe((data) => (this._food = data));
  }

  getCatalog() {
    return this._food;
  }
}
