import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Cart } from 'src/app/model/cart';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/services/cart.service';
import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent {
  carts: Product[] = [];

  constructor(
    private cartservice: CartService,
    private storageservice: StorageService,private router:Router
  ) {
    this.carts = cartservice.getCart();
  }
  
}
