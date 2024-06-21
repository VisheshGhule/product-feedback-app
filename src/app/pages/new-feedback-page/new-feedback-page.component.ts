import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-feedback-page',
  standalone: true,
  imports: [],
  templateUrl: './new-feedback-page.component.html',
})
export class NewFeedbackPageComponent {
  constructor(private _location: Location) {}

  goBack(): void {
    this._location.back();
  }
}
