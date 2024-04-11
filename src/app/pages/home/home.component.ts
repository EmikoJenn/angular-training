import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { MoviesType } from 'src/mock/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  catalog: MoviesType = [];

  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
    this.catalog = this.movieService.getCatalog();
  }

  addToCart(id: number) {

  }
}
