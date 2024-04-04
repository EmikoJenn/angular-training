import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // catalog: any[] = [];
  catalog: string = '';

  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
    this.catalog = JSON.stringify(this.movieService.getCatalog());
    console.log(this.catalog);
  }
}
