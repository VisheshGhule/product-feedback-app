import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sort-menu',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './sort-menu.component.html',
})
export class SortMenuComponent {
  menuOptions = [
    {
      name: 'Most Upvotes',
      href: 'most-upvotes',
    },
    {
      name: 'Least Upvotes',
      href: 'least-upvotes',
    },
    {
      name: 'Most Comments',
      href: 'most-comments',
    },
    {
      name: 'Least Comments',
      href: 'least-comments',
    },
  ];
}
