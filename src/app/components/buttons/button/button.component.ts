import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() text = 'Button';
  @Input() customClass = '';
  defaultClass = 'text-s1 text-lightest-gray w-full h-[44px] rounded-lg hover:bg-opacity-70 transition-colors';
}
