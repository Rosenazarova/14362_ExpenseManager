import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEpxenseTypeComponent } from './edit-epxense-type.component';

describe('EditEpxenseTypeComponent', () => {
  let component: EditEpxenseTypeComponent;
  let fixture: ComponentFixture<EditEpxenseTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditEpxenseTypeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditEpxenseTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
