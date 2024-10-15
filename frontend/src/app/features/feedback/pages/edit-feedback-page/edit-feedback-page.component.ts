import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule, Location } from '@angular/common';

@Component({
  selector: 'app-edit-feedback-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './edit-feedback-page.component.html',
})
export class EditFeedbackPageComponent {
  @ViewChild('categorySelect') categorySelect!: ElementRef<HTMLSelectElement>;
  @ViewChild('statusSelect') statusSelect!: ElementRef<HTMLSelectElement>;

  categoryOptions = ['Feature', 'UI', 'UX', 'Enhancement', 'Bug'];
  statusOptions = ['Suggestion', 'Planned', 'In-Progress', 'Live'];
  selectedCategory = 'Feature';
  selectedStatus = 'Suggestion';
  isCategoryMenuOpen = false;
  isStatusMenuOpen = false;
  isDropdownOpen = false;

  constructor(private readonly _location: Location) {}

  goBack(): void {
    this._location.back();
  }

  selectCategoryMenuOption(index: number): void {
    const option = this.categoryOptions[index];
    this.selectedCategory = option;
    this.categorySelect.nativeElement.value = option.toLowerCase();
  }

  toggleCategoryMenuDropdown(isOpen: boolean): void {
    this.isCategoryMenuOpen = isOpen;
    this.isStatusMenuOpen = false;
    this.isDropdownOpen = true;
  }

  selectStatusMenuOption(index: number): void {
    const option = this.statusOptions[index];
    this.selectedStatus = option;
    this.statusSelect.nativeElement.value = option.toLowerCase();
  }

  toggleStatusMenuDropdown(isOpen: boolean): void {
    this.isStatusMenuOpen = isOpen;
    this.isCategoryMenuOpen = false;
    this.isDropdownOpen = true;
  }

  closeDropdown(): void {
    this.isDropdownOpen = false;
    this.isStatusMenuOpen = false;
    this.isCategoryMenuOpen = false;
  }
}
