import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-label',
  standalone: true,
  imports: [],
  template: ` <label class="text-s2 text-dusk-blue flex flex-col gap-0.5" [htmlFor]="htmlFor">
    <span>{{ heading }}</span>
    <p class="font-normal">{{ description }}</p>
  </label>`,
})
export class FormLabelComponent {
  @Input() heading = '';
  @Input() description = '';
  @Input() htmlFor = '';
}
