import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sort-menu',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './sort-menu.component.html',
})
export class SortMenuComponent {
  @Input() menuOptions: Array<{ name: string; href: string }> = [];
  @Input() selectId!: string;
  selectedItem = '';

  ngOnInit(): void {
    if (this.menuOptions.length > 0) {
      this.selectedItem = this.menuOptions[0].name;
    }
  }

  handleSelection(index: number): void {
    this.selectedItem = this.menuOptions[index].name;
  }

  preventDefault(event: Event): void {
    event.preventDefault();
  }
}
