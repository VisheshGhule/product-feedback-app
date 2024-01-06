import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { ButtonComponent } from './components/buttons/button/button.component';
import { GoBackButtonComponent } from './components/buttons/go-back-button/go-back-button.component';
import { TagButtonComponent } from './components/buttons/tag-button/tag-button.component';
import { VoteButtonComponent } from './components/buttons/vote-button/vote-button.component';
import { SortMenuComponent } from './components/sort-menu/sort-menu.component';
import { FormInputComponent } from './components/form/form-input/form-input.component';
import { FormLabelComponent } from './components/form/form-label/form-label.component';
import { FormSelectComponent } from './components/form/form-select/form-select.component';
import { FormControlComponent } from './components/form/form-control/form-control.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ButtonComponent,
    GoBackButtonComponent,
    TagButtonComponent,
    VoteButtonComponent,
    SortMenuComponent,
    FormInputComponent,
    FormLabelComponent,
    FormSelectComponent,
    FormControlComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'product-feedback-app';
  menuOptions = [
    {
      name: 'Mr.',
      value: 'mr',
    },
    {
      name: 'Mrs',
      value: 'nrs',
    },
    {
      name: 'Miss.',
      value: 'miss',
    },
    {
      name: 'Dr.',
      value: 'dr',
    },
  ];
}
