import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
})
export class IntroComponent {
  constructor(private router: Router) {}
  continue() {
    this.router.navigate(['/login']);
  }
}
