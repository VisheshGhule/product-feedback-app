import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

import { TagButtonComponent } from '../../components/buttons/tag-button/tag-button.component';
import { ButtonComponent } from '../../components/buttons/button/button.component';
import { SortMenuComponent } from '../../components/sort-menu/sort-menu.component';
import { ProductRequest, User } from '../../model/product';
import * as data from '../../../assets/data/data.json';

interface ProductFeedbackData {
  currentUser: User;
  productRequests: ProductRequest[];
}

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    TagButtonComponent,
    ButtonComponent,
    SortMenuComponent,
    MatIconModule,
  ],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  productRequests: ProductRequest[] = [];
  productFeedbackData!: ProductFeedbackData;

  constructor(private _router: Router) {
    this.productFeedbackData = data as ProductFeedbackData;
  }

  goTonewFeedBackPage(): void {
    this._router.navigateByUrl('/new-feedback');
  }
}
