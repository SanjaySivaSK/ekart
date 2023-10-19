import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Product } from '../model/product';
import { Cart } from '../model/cart';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private users: User[] = [];
  cart: Cart[] = [];

  constructor() {
    this.users = [
      {
        id: this.users.length + 1,
        email: 'sanjay@gmail.com',
        password: 'sanjay283',
      },
    ];
  }

  loadUser(): void {
    if (!localStorage.getItem('users')) {
      localStorage.setItem('users', JSON.stringify(this.users));
    }
  }

  getAllUsers(): User[] {
    return JSON.parse(localStorage.getItem('users') as string);
  }

  add(user: User) {
    let users = JSON.parse(localStorage.getItem('users') as string);
    console.log(user);

    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  }

  setLoggedUser(user: User) {
    localStorage.setItem('loggedUser', JSON.stringify(user));
  }

  loggeduser(): User {
    return JSON.parse(localStorage.getItem('users') as string);
  }

  removeloggeduser() {
    localStorage.removeItem('loggedUser');
  }
  isLoggedInuser(): boolean {
    return localStorage.getItem('loggedUser') !== null;
  }
  loadproduct(products: Product[]) {
    localStorage.setItem('products', JSON.stringify(products));
  }
  getproduct() {
    return JSON.parse(localStorage.getItem('products') as string);
  }

  loadcart(cart: Cart[]) {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  getcart(): Cart[] {
    let cart = JSON.parse(localStorage.getItem('cart') as string);
    if (cart === null) {
      cart = [];
    }
    return cart;
  }
  
}
