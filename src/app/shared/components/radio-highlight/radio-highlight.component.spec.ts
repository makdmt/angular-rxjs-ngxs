import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioHighlightComponent } from './radio-highlight.component';

describe('RadioHighlightComponent', () => {
  let component: RadioHighlightComponent;
  let fixture: ComponentFixture<RadioHighlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RadioHighlightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RadioHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
