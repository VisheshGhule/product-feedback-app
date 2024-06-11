import { Routes } from '@angular/router';
import { NewFeedbackPageComponent } from './pages/new-feedback-page/new-feedback-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'new-feedback', component: NewFeedbackPageComponent },
];
