import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { User } from '../model/user';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private storageservice: StorageService) {}
  isvalid(user: User): boolean {
    console.log(user);
    let users: User[] = this.storageservice.getAllUsers();
    console.log(users);
    let validUser = users.find(
      (u) => u.email === user.email && u.password === user.password
    );
    this.storageservice.setLoggedUser(user);
    if (!validUser) {
      return false;
    }
    return true;
  }

  islogin(): boolean {
    return this.storageservice.isLoggedInuser();
  }
}
