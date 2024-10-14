import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-vote-button',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './vote-button.component.html',
})
export class VoteButtonComponent {}
