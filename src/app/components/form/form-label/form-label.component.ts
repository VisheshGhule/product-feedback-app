import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-label',
  standalone: true,
  imports: [],
  template: ` <div class="text-s2 text-dusk-blue flex flex-col gap-0.5">
    <span>{{ heading }}</span>
    <p class="font-normal">{{ description }}</p>
  </div>`,
})
export class FormLabelComponent {
  @Input() heading = '';
  @Input() description = '';
}
