import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormLabelComponent } from '../form-label/form-label.component';

@Component({
  selector: 'app-form-input',
  standalone: true,
  imports: [CommonModule, FormLabelComponent],
  template: `
    <div>
      <input [type]="inputType || 'text'" [class]="getClass()" [id]="inputId" />
      @if (errorMsg) {
      <p class="form-control-error">
        {{ errorMsg }}
      </p>
      }
    </div>
  `,
})
export class FormInputComponent {
  @Input() inputType!: string;
  @Input() inputId!: string;
  @Input() errorMsg = '';

  getClass(): string {
    return this.errorMsg ? 'form-control-invalid' : 'form-control-valid';
  }
}
