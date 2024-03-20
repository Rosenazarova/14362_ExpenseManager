import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEpxenseTypeComponent } from './home-epxense-type.component';

describe('HomeEpxenseTypeComponent', () => {
  let component: HomeEpxenseTypeComponent;
  let fixture: ComponentFixture<HomeEpxenseTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeEpxenseTypeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeEpxenseTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
