import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

import { ButtonComponent } from './components/buttons/button/button.component';
import { GoBackButtonComponent } from './components/buttons/go-back-button/go-back-button.component';
import { TagButtonComponent } from './components/buttons/tag-button/tag-button.component';
import { VoteButtonComponent } from './components/buttons/vote-button/vote-button.component';
import { SortMenuComponent } from './components/sort-menu/sort-menu.component';
import { FormInputComponent } from './components/form/form-input/form-input.component';
import { FormLabelComponent } from './components/form/form-label/form-label.component';
import { FormSelectComponent } from './components/form/form-select/form-select.component';
import { FormControlComponent } from './components/form/form-control/form-control.component';
import { FormTextareaComponent } from './components/form/form-textarea/form-textarea.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
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
    FormTextareaComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'product-feedback-app';
  selectOptions = [
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
  menuOptions = [
    {
      name: 'Most Upvotes',
      href: 'most-upvotes',
    },
    {
      name: 'Least Upvotes',
      href: 'least-upvotes',
    },
    {
      name: 'Most Comments',
      href: 'most-comments',
    },
    {
      name: 'Least Comments',
      href: 'least-comments',
    },
  ];
}
