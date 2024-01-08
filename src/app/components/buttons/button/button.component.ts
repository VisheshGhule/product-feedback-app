import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  template: `
    <button
      [type]="buttonType || 'button'"
      [class]="
        'text-s1 md:text-s2 text-lightest-gray font-semibold px-4 py-2.5 md:px-6 md:py-3 rounded-custom-lg hover:bg-opacity-70 transition-colors text-center '
          .concat(customClass)
      "
    >
      <ng-content></ng-content>
    </button>
  `,
})
export class ButtonComponent {
  @Input() customClass = '';
  @Input() buttonType = '';
  @Input() bgColor!:
    | 'rich-purple'
    | 'royal-blue'
    | 'deep-indigo'
    | 'brick-red';
}
