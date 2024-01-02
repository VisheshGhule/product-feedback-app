import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-go-back-button',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './go-back-button.component.html',
})
export class GoBackButtonComponent {
  @Input() text = 'Button';
  @Input() customClass = '';
  defaultClass =
    'text-s2 text-inherit rounded-lg flex items-center gap-1 hover:underline';
}
