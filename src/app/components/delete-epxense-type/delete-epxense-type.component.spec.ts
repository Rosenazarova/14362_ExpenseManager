import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEpxenseTypeComponent } from './delete-epxense-type.component';

describe('DeleteEpxenseTypeComponent', () => {
  let component: DeleteEpxenseTypeComponent;
  let fixture: ComponentFixture<DeleteEpxenseTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteEpxenseTypeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteEpxenseTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
