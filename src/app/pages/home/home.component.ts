import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';
import { MoviesService } from 'src/app/shared/services/movies.service';
import { MoviesType } from 'src/mock/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  catalog: MoviesType = [];

  constructor(private movieService: MoviesService, private movieCart: CartService) {}

  ngOnInit(): void {
    this.catalog = this.movieService.getCatalog();
  }

  addToCart(id: number) {
    this.movieCart.addMovieToCart(id)
  }
}
