import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackDetailsPageComponent } from './feedback-details-page.component';

describe('FeedbackDetailsPageComponent', () => {
  let component: FeedbackDetailsPageComponent;
  let fixture: ComponentFixture<FeedbackDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedbackDetailsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeedbackDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
