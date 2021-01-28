import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutAssuranceComponent } from './ajout-assurance.component';

describe('AjoutAssuranceComponent', () => {
  let component: AjoutAssuranceComponent;
  let fixture: ComponentFixture<AjoutAssuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutAssuranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutAssuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
