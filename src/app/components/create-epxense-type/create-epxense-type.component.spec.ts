import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEpxenseTypeComponent } from './create-epxense-type.component';

describe('CreateEpxenseTypeComponent', () => {
  let component: CreateEpxenseTypeComponent;
  let fixture: ComponentFixture<CreateEpxenseTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateEpxenseTypeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateEpxenseTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
