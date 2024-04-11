import { Injectable } from '@angular/core';
import { MoviesService } from './movies.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _cart: {
    id: number,
    amount: number
  }[] = []


  constructor(private movieService: MoviesService) { }

  addToCart(id: number) {
    const index = this._cart.findIndex(el => el?.id === id)
    if (index < 0) this._cart.push({
      id,
      amount: 1
    })
    else this._cart[index] = {
      id,
      amount: this._cart[index]?.amount + 1
    }
  }

  getCart() {
    const catalog = this.movieService.getCatalog();

    return this._cart.map(mov => ({
      id: mov.id,
      amount: mov.amount,
      price: 5,
      total: mov.amount * 5,
      title: catalog.find(el => el.id === mov.id)?.title,
      image: catalog.find(el => el.id === mov.id)?.image,
    }))
  }

}
