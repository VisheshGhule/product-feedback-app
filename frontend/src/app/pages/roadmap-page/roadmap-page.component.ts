import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { User } from './../../model/product';
import { ProductRequest } from '../../model/product';
import * as data from '../../../assets/data/data.json';

interface ProductFeedbackData {
  currentUser: User;
  productRequests: ProductRequest[];
}

type ProductFeedbackStatus = 'suggestion' | 'planned' | 'in-progress' | 'live';

@Component({
  selector: 'app-roadmap-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './roadmap-page.component.html',
})
export class RoadmapPageComponent {
  productFeedbackData!: ProductFeedbackData;
  productFeedbacks!: ProductRequest[];
  selectedFeedbackStatus = new BehaviorSubject<ProductFeedbackStatus>(
    'planned'
  );
  feedbackStatusGroups: ProductFeedbackStatus[] = [
    'planned',
    'in-progress',
    'live',
  ];

  constructor(private _location: Location, private _router: Router) {
    const productFeedbackData = data as ProductFeedbackData;
    this.productFeedbackData = productFeedbackData;
    this.productFeedbacks = this.filterFeedbacksByStatus('planned');
  }

  filterFeedbacksByStatus(
    status: ProductFeedbackStatus | null
  ): ProductRequest[] {
    return this.productFeedbackData.productRequests.filter(
      (feedback) => feedback.status === status
    );
  }

  selectFeedbacksByStatus(status: ProductFeedbackStatus): void {
    this.selectedFeedbackStatus.next(status);
  }

  getSelectedFeedbacksNumber(status: ProductFeedbackStatus | null) {
    return this.filterFeedbacksByStatus(status).length;
  }

  getSelectedFeedbacksSubHeading(status: ProductFeedbackStatus | null): string {
    switch (status) {
      case 'planned':
        return 'Ideas prioritized for research';
      case 'in-progress':
        return 'Currently being developed';
      case 'live':
        return 'Released features';
      default:
        return 'Suggested features';
    }
  }

  goBack(): void {
    this._location.back();
  }

  goToNewFeedbackPage(): void {
    this._router.navigateByUrl('/new-feedback');
  }

  goToFeedbackDetailsPage(): void {
    this._router.navigateByUrl('/feedback-details');
  }
}
