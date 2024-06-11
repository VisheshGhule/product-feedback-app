import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  constructor(private _router: Router) {}

  newFeedBack(): void {
    this._router.navigateByUrl('/new-feedback');
  }
}
