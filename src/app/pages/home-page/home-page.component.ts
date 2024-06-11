import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

import { TagButtonComponent } from '../../components/buttons/tag-button/tag-button.component';
import { ButtonComponent } from '../../components/buttons/button/button.component';
import { SortMenuComponent } from '../../components/sort-menu/sort-menu.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    TagButtonComponent,
    ButtonComponent,
    SortMenuComponent,
    MatIconModule,
  ],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  constructor(private _router: Router) {}

  newFeedBack(): void {
    this._router.navigateByUrl('/new-feedback');
  }
}
