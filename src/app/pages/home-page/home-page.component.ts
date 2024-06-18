import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { TagButtonComponent } from '../../components/buttons/tag-button/tag-button.component';
import { ButtonComponent } from '../../components/buttons/button/button.component';
import { SortMenuComponent } from '../../components/sort-menu/sort-menu.component';
import { ProductRequest, User } from '../../model/product';
import * as data from '../../../assets/data/data.json';

interface ProductFeedbackData {
  currentUser: User;
  productRequests: ProductRequest[];
}

type ProductFeedbackStatus = 'suggestion' | 'planned' | 'in-progress' | 'live';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    TagButtonComponent,
    ButtonComponent,
    SortMenuComponent,
  ],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  @ViewChild('asideModal') asideModal!: ElementRef<HTMLDialogElement>;

  productRequests: ProductRequest[] = [];
  productFeedbackData!: ProductFeedbackData;
  isOpen = false;

  constructor(private _router: Router) {
    this.productFeedbackData = data as ProductFeedbackData;
  }

  goTonewFeedBackPage(): void {
    this._router.navigateByUrl('/new-feedback');
  }

  toggleAsideModal(): void {
    if (this.asideModal.nativeElement.open) {
      this.asideModal.nativeElement.close();
      this.isOpen = false;
    } else {
      this.asideModal.nativeElement.showModal();
      this.isOpen = true;
    }
  }

  getFeedbacksNumberByStatus(status: ProductFeedbackStatus): number {
    return this.productFeedbackData.productRequests.filter(
      (feedback) => feedback.status === status
    ).length;
  }
}
