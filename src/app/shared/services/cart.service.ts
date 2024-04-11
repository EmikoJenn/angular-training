import { Injectable } from '@angular/core';
import { MoviesService } from './movies.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _movies: {
    id: number,
    amount: number
  }[] = []
  private _food: {
    id: number,
    amount: number
  }[] = []


  constructor(private movieService: MoviesService) { }

  addMovieToCart(id: number) {
    const index = this._movies.findIndex(el => el?.id === id)
    if (index < 0) this._movies.push({
      id,
      amount: 1
    })
    else this._movies[index] = {
      id,
      amount: this._movies[index]?.amount + 1
    }
  }

  addFoodToCart(id: number) {
    const index = this._food.findIndex(el => el?.id === id)
    if (index < 0) this._food.push({
      id,
      amount: 1
    })
    else this._food[index] = {
      id,
      amount: this._food[index]?.amount + 1
    }
  }

  getCart() {
    const catalog = this.movieService.getCatalog();
    const cart = {
      movies: this._movies.map(mov => ({
        id: mov.id,
        amount: mov.amount,
        price: 5,
        total: mov.amount * 5,
        title: catalog.find(el => el.id === mov.id)?.title ?? '',
        image: catalog.find(el => el.id === mov.id)?.image ?? '',
      })),
      food: this._food
    }

    return cart
  }

}
