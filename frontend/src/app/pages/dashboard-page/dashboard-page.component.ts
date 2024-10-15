import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ProductRequest, User } from '../../model/product';
import * as data from '../../../assets/data/data.json';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../components/buttons/button/button.component';
import { TagButtonComponent } from '../../components/buttons/tag-button/tag-button.component';
import { SortMenuComponent } from '../../components/sort-menu/sort-menu.component';
import { MatIconModule } from '@angular/material/icon';

interface ProductFeedbackData {
  currentUser: User;
  productRequests: ProductRequest[];
}

type ProductFeedbackStatus = 'suggestion' | 'planned' | 'in-progress' | 'live';
@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TagButtonComponent,
    ButtonComponent,
    SortMenuComponent,
    MatIconModule
  ],
  templateUrl: './dashboard-page.component.html',
})
export class DashboardPageComponent {
  @ViewChild('asideModal') asideModal!: ElementRef<HTMLDialogElement>;

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

}
