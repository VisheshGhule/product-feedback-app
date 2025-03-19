import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { ButtonComponent } from '../../../../components/buttons/button/button.component';
import { TagButtonComponent } from '../../../../components/buttons/tag-button/tag-button.component';
import { SortMenuComponent } from '../../../../components/sort-menu/sort-menu.component';
import products from '../../data/products';

type Product = {
  id: string;
  name: string;
  description: string;
  category: string;
  imageUrl: string;
  feedbackCount: number;
}

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
    { name: 'Most Feedbacks', href: 'most-feedbacks' },
    { name: 'Least Feedbacks', href: 'least-feedbacks' },
  ];
  categories: Array<{ id: string; name: string }> = [
    { id: '1', name: 'books' },
    { id: '2', name: 'clothing' },
    { id: '3', name: 'software' },
    { id: '4', name: 'services' },
    { id: '5', name: 'automotive' },
    { id: '6', name: 'electronics' },
    { id: '7', name: 'toys & games' },
    { id: '8', name: 'home & garden' },
    { id: '9', name: 'music & podcast' },
    { id: '10', name: 'sports & outdoors' },
    { id: '11', name: 'food & agriculture' },
    { id: '12', name: 'beauty & cosmetics' },
    { id: '13', name: 'tools & equipments' },
  ];
  selectedSortType = this.sortMenuOptions[0];
  products: Product[] = [];

  constructor(private readonly _router: Router) {
    this.products = products as Product[];
    console.log(products)
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

  goToNewProductPage(): void {
    this._router.navigateByUrl('/products/add');
  }

  goToProductDetailsPage(): void {
    this._router.navigateByUrl('/products/details');
  }

  selectSortType(index: number): void {
    this.selectedSortType = this.sortMenuOptions[index];
  }

  toggleSortMenuDropdown(value: boolean): void {
    this.isSortMenuOpen = !value;
  }
}
