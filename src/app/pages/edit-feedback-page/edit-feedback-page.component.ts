import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-feedback-page',
  standalone: true,
  imports: [],
  templateUrl: './edit-feedback-page.component.html',
})
export class EditFeedbackPageComponent {
  constructor(private _location: Location) {}

  goBack(): void {
    this._location.back();
  }
}
