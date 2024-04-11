import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';
import { FoodService } from 'src/app/shared/services/food.service';
import { FOODType } from 'src/mock/data';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss'],
})
export class FoodComponent implements OnInit {
  catalog: FOODType = [];

  constructor(private foodService: FoodService, private movieCart: CartService) {}

  ngOnInit(): void {
    this.catalog = this.foodService.getCatalog();
  }

  addToCart(id: number) {
    this.movieCart.addFoodToCart(id)
  }
}
