import { Component, OnInit } from '@angular/core';
import { StorageService } from './services/storage.service';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private storageservice: StorageService,private authservice:AuthService) {}

  ngOnInit(): void {
    this.storageservice.loadUser();
  }
  user():boolean{
    return this.authservice.islogin()
  }
}
