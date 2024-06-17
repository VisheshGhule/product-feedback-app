import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  imports: [CommonModule],
  templateUrl: './roadmap-page.component.html',
})
export class RoadmapPageComponent {
  productFeedbackData!: ProductFeedbackData;
  productFeedbacks!: ProductRequest[];
  selectedFeedbackStatus = new BehaviorSubject<ProductFeedbackStatus>(
    'planned'
  );

  constructor() {
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
        return 'Features currently in research';
      case 'in-progress':
        return 'Features currently being developed';
      case 'live':
        return 'Features currently released';
      default:
        return 'Features currently suggested';
    }
  }
}
