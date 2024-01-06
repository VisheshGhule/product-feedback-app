import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  template: `
    <button
      [type]="buttonType || 'button'"
      [class]="
        'text-s1 text-lightest-gray px-4 w-full h-[44px] rounded-custom-lg hover:bg-opacity-70 transition-colors text-center '
          .concat('bg-')
          .concat(bgColor)
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
