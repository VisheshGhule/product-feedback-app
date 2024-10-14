import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-textarea',
  standalone: true,
  imports: [],
  template: `
    <div>
      <textarea
        [id]="textareaId"
        [class]="getClass()"
        [placeholder]="placeholder"
        cols="30"
        rows="5"
      ></textarea>
      @if (errorMsg) {
      <p class="form-control-error">{{ errorMsg }}</p>
      }
    </div>
  `,
})
export class FormTextareaComponent {
  @Input() textareaId = '';
  @Input() placeholder = '';
  @Input() errorMsg = '';

  getClass(): string {
    return this.errorMsg ? 'form-control-invalid' : 'form-control-valid';
  }
}
