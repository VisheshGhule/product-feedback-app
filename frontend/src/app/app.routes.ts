import { Routes } from '@angular/router';
import { AddFeedbackPageComponent } from './features/feedback/pages/add-feedback-page/add-feedback-page.component';
import { FeedbackHomePageComponent } from './features/feedback/pages/feedback-home-page/feedback-home-page.component';
import { EditFeedbackPageComponent } from './features/feedback/pages/edit-feedback-page/edit-feedback-page.component';
import { FeedbackDetailsPageComponent } from './features/feedback/pages/feedback-details-page/feedback-details-page.component';
import { RoadmapPageComponent } from './features/feedback/pages/roadmap-page/roadmap-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardPageComponent },
  {
    path: 'feedbacks',
    children: [
      { path: '', component: FeedbackHomePageComponent },
      { path: 'add', component: AddFeedbackPageComponent },
      { path: 'edit', component: EditFeedbackPageComponent },
      { path: 'details', component: FeedbackDetailsPageComponent },
      { path: 'roadmap', component: RoadmapPageComponent },
    ],
  },
];
