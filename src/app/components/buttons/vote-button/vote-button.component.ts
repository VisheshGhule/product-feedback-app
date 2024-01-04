import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { IconComponent } from '../../icon/icon.component';

@Component({
  selector: 'app-vote-button',
  standalone: true,
  imports: [MatIconModule, IconComponent],
  templateUrl: './vote-button.component.html',
})
export class VoteButtonComponent {}
