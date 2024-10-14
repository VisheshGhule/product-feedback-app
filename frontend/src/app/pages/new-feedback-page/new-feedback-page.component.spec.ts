import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFeedbackPageComponent } from './new-feedback-page.component';

describe('NewFeedbackPageComponent', () => {
  let component: NewFeedbackPageComponent;
  let fixture: ComponentFixture<NewFeedbackPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewFeedbackPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewFeedbackPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
