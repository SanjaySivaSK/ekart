import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  error: string = '';
  constructor(private authservice: AuthService, private router: Router) {}
  submit(loginForm: NgForm): void {
    console.log(loginForm.value);
    if (this.authservice.isvalid(loginForm.value)) {
      this.router.navigate(['/home'], { replaceUrl: true });
      console.log(loginForm);
    } else {
      this.error = `please enter the valid `;
    }
  }
  
}
