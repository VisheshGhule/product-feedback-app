import { Routes } from '@angular/router';
import { NewFeedbackPageComponent } from './pages/new-feedback-page/new-feedback-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { EditFeedbackPageComponent } from './pages/edit-feedback-page/edit-feedback-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'new-feedback', component: NewFeedbackPageComponent },
  { path: 'edit-feedback', component: EditFeedbackPageComponent },
];
