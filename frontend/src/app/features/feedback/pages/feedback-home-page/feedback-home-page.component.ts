import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { TagButtonComponent } from '../../../../components/buttons/tag-button/tag-button.component';
import { ButtonComponent } from '../../../../components/buttons/button/button.component';
import { SortMenuComponent } from '../../../../components/sort-menu/sort-menu.component';
import { ProductRequest, User } from '../../../../model/product';
import * as data from '../../data/feedbacks.json';

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
    RouterModule,
    TagButtonComponent,
    ButtonComponent,
    SortMenuComponent,
  ],
  templateUrl: './feedback-home-page.component.html',
})
export class FeedbackHomePageComponent {
  @ViewChild('asideModal') asideModal!: ElementRef<HTMLDialogElement>;
  productRequests: ProductRequest[] = [];
  productFeedbackData!: ProductFeedbackData;
  isOpen = false;
  isSortMenuOpen = false;
  sortMenuOptions: Array<{ name: string; href: string }> = [
    { name: 'Most Upvotes', href: 'most-upvotes' },
    { name: 'Least Upvotes', href: 'least-upvotes' },
    { name: 'Most Comments', href: 'most-comments' },
    { name: 'Least Comments', href: 'most-comments' },
  ];
  selectedSortType = this.sortMenuOptions[0];

  constructor(private readonly _router: Router) {
    this.productFeedbackData = data as ProductFeedbackData;
  }

  goToNewFeedBackPage(): void {
    this._router.navigateByUrl('/feedbacks/add');
  }

  goToFeedbackDetailsPage(): void {
    this._router.navigateByUrl("/feedbacks/details");
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

  selectSortType(index: number): void {
    this.selectedSortType = this.sortMenuOptions[index];
  }

  toggleSortMenuDropdown(value: boolean): void {
    this.isSortMenuOpen = !value;
  }
}
