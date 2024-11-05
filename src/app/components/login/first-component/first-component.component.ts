import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent {
  // router: any;

  constructor(private router: Router) {}

  goToPage2() {
    this.router.navigate(['/second'])
  }

}
