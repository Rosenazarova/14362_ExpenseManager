import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsEpxenseTypeComponent } from './details-epxense-type.component';

describe('DetailsEpxenseTypeComponent', () => {
  let component: DetailsEpxenseTypeComponent;
  let fixture: ComponentFixture<DetailsEpxenseTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsEpxenseTypeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsEpxenseTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
