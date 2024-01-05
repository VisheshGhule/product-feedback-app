import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  template: `
    <button
      type="submit"
      [class]="
        'text-s1 text-lightest-gray w-full h-[44px] rounded-lg hover:bg-opacity-70 transition-colors '.concat(
          customClass
        )
      "
    >
      <ng-content></ng-content>
    </button>
  `,
})
export class ButtonComponent {
  @Input() customClass = '';
}
