import { Injectable } from '@angular/core';
import { MoviesService } from './movies.service';
import { BehaviorSubject } from 'rxjs';
import { FoodService } from './food.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _movies = new BehaviorSubject<{
    id: number,
    amount: number
  }[]>([])
  private _food = new BehaviorSubject<{
    id: number,
    amount: number
  }[]>([])


  constructor(private movieService: MoviesService, private foodService: FoodService) { }

  addMovieToCart(id: number) {
    const index = this._movies.getValue().findIndex(el => el?.id === id)
    if (index < 0) this._movies.next(
      this._movies.getValue().concat([{
        id,
        amount: 1
      }])
    )
    else this._movies.next(
      [...this._movies.getValue()].map((el, i) => {
        if (i !== index) return el
        return {...el, amount: el.amount + 1}
      })
    )
  }

  addFoodToCart(id: number) {
    const index = this._food.getValue().findIndex(el => el?.id === id)
    if (index < 0) this._food.next(
      this._food.getValue().concat([{
        id,
        amount: 1
      }])
    )
    else this._food.next(
      [...this._food.getValue()].map((el, i) => {
        if (i !== index) return el
        return {...el, amount: el.amount + 1}
      })
    )
  }

  getCart() {
    const movieCatalog = this.movieService.getCatalog();
    const foodCatalog = this.foodService.getCatalog()
    let movies = new BehaviorSubject<any[]>([])
    let food = new BehaviorSubject<any[]>([])

    this._movies.subscribe(movs => {
      movies.next(movs.map(
        mov => ({
            id: mov.id,
            amount: mov.amount,
            price: 5,
            total: mov.amount * 5,
            title: movieCatalog.find(el => el.id === mov.id)?.title ?? '',
            image: movieCatalog.find(el => el.id === mov.id)?.image ?? '',
          }))
      )})

    this._food.subscribe(menu => {
      food.next(menu.map(
        item => ({
          id: item.id,
            amount: item.amount,
            price: foodCatalog.find(el => el.id === item.id)?.price ?? 5,
            total: item.amount * (foodCatalog.find(el => el.id === item.id)?.price ?? 5),
            title: foodCatalog.find(el => el.id === item.id)?.title ?? '',
            image: foodCatalog.find(el => el.id === item.id)?.image ?? '',
        })
      ))
    })

    return [movies, food]
  }

}
