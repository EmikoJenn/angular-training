import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit{
  cart: BehaviorSubject<any[]>[] = []
  money: 'USD' | 'EUR' | 'CADUSD' = 'USD'

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
      this.cart = this.cartService.getCart()
  }
}
