import { CommonModule, Location } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-new-feedback-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-feedback-page.component.html',
})
export class NewFeedbackPageComponent {
  @ViewChild('categorySelect') categorySelect!: ElementRef<HTMLSelectElement>;
  categoryOptions = ['Feature', 'UI', 'UX', 'Enhancement', 'Bug'];
  selectedCategory = 'Feature';
  isMenuOpen = false;

  constructor(private _location: Location) {}

  goBack(): void {
    this._location.back();
  }

  selectMenuOption(index: number): void {
    const option = this.categoryOptions[index];
    this.selectedCategory = option;
    this.categorySelect.nativeElement.value = option.toLocaleLowerCase();
  }

  toggleMenuDropdown(isOpen: boolean): void {
    this.isMenuOpen = isOpen;
  }
}
