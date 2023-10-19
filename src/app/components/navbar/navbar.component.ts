import { Component } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  constructor(private storageservice: StorageService ,private router:Router) {}
  removeloguser() {
    this.storageservice.removeloggeduser();
    this.router.navigate(['/login'],{replaceUrl:true})
  }
}
