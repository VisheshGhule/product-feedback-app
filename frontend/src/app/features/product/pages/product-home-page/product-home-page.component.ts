import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { ButtonComponent } from '../../../../components/buttons/button/button.component';
import { TagButtonComponent } from '../../../../components/buttons/tag-button/tag-button.component';
import { SortMenuComponent } from '../../../../components/sort-menu/sort-menu.component';

@Component({
  selector: 'app-product-home-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TagButtonComponent,
    ButtonComponent,
    SortMenuComponent,
    MatIconModule,
  ],
  templateUrl: './product-home-page.component.html',
  styleUrl: './product-home-page.component.css',
})
export class ProductHomePageComponent {
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

  constructor(private readonly _router: Router) {}

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
