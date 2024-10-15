import { Routes } from '@angular/router';
import { NewFeedbackPageComponent } from './pages/new-feedback-page/new-feedback-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { EditFeedbackPageComponent } from './pages/edit-feedback-page/edit-feedback-page.component';
import { FeedbackDetailsPageComponent } from './pages/feedback-details-page/feedback-details-page.component';
import { RoadmapPageComponent } from './pages/roadmap-page/roadmap-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardPageComponent },
  { path: '', component: HomePageComponent },
  { path: 'new-feedback', component: NewFeedbackPageComponent },
  { path: 'edit-feedback', component: EditFeedbackPageComponent },
  { path: 'feedback-details', component: FeedbackDetailsPageComponent },
  { path: 'roadmap', component: RoadmapPageComponent },
];
