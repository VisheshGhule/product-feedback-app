import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FormLabelComponent } from '../form-label/form-label.component';

@Component({
  selector: 'app-form-select',
  standalone: true,
  imports: [MatIconModule, FormLabelComponent],
  templateUrl: './form-select.component.html',
})
export class FormSelectComponent implements OnInit {
  @Input() options: Array<{ name: string; value: string }> = [];
  @Input() selectId!: string;
  @Input() errorMsg = '';
  selectedItem = '';

  ngOnInit(): void {
    if (this.options.length > 0) {
      this.selectedItem = this.options[0].name;
    }
  }

  handleSelection(index: number): void {
    this.selectedItem = this.options[index].name;
  }

  preventDefault(event: Event): void {
    event.preventDefault();
  }
}
