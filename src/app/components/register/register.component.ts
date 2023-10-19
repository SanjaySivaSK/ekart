import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  constructor(private storageservice: StorageService, private router: Router) {}

  register(loginForm: NgForm): void {
    this.storageservice.add(loginForm.value);

    console.log(loginForm.value)
    this.router.navigate(['/login'], { replaceUrl: true });
  }
}
