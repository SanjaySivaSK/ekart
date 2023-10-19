import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Product } from '../model/product';
import { Cart } from '../model/cart';
import { User } from '../model/user';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private storageservice: StorageService) {}

  addcart(id: number) {
    let products = this.storageservice.getproduct();
    let loggedUser: User = this.storageservice.loggeduser();

    let cart: Cart[] = this.storageservice.getcart();
    console.log(cart);
    let product: Product = products.find((p: Product) => p.id === id);
    console.log(product);
    if (product) {
      let usercart: Cart | undefined = cart.find(
        (c: Cart) => c.user.id === loggedUser.id
      );

      console.log(usercart);
      if (usercart) {
        let existproduct = usercart?.cart.find((f) => f.id === id);

        if (existproduct) {
          existproduct.count! += 1;
        } else {
          usercart.cart.push({ ...product, count: 1 });
        }
      } else {
        let newcart: Cart = {
          user: loggedUser,
          cart: [{ ...product, count: 1 }],
        };
        cart.push(newcart);
      }

      console.log(cart);
      this.storageservice.loadcart(cart);
    }
  }

  getCart(): Product[] {
    let loggedUser: User = this.storageservice.loggeduser();

    let cart: Cart[] = this.storageservice.getcart();

    let usercart: Cart | undefined = cart.find(
      (cartItem) => cartItem.user.id === loggedUser.id
    );

    if (!usercart) {
      return [];
    }

    return usercart.cart;
  }
  
}

