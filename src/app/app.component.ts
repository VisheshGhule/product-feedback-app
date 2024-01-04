import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { ButtonComponent } from './components/buttons/button/button.component';
import { GoBackButtonComponent } from './components/buttons/go-back-button/go-back-button.component';
import { TagButtonComponent } from './components/buttons/tag-button/tag-button.component';
import { VoteButtonComponent } from './components/buttons/vote-button/vote-button.component';
import { IconComponent } from './components/icon/icon.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ButtonComponent,
    GoBackButtonComponent,
    TagButtonComponent,
    VoteButtonComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'product-feedback-app';

  ngOnInit(): void {
    initFlowbite();
  }
}
