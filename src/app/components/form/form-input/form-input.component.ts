import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-input',
  standalone: true,
  imports: [CommonModule],
  template: `
    <label class="flex flex-col gap-3">
      <ng-content></ng-content>
      <input [type]="inputType || 'text'" [class]="getClass()" />
      @if (errorMsg) {
      <p class="text-s2 font-normal text-brick-red mt-1">{{ errorMsg }}</p>
      }
    </label>
  `,
})
export class FormInputComponent {
  @Input() inputType!: string;
  @Input() errorMsg = '';

  getClass(): string {
    return this.errorMsg
      ? 'form-input form-control-invalid'
      : 'form-input form-control-valid';
  }
}
