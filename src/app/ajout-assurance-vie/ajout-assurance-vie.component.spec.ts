import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutAssuranceVieComponent } from './ajout-assurance-vie.component';

describe('AjoutAssuranceVieComponent', () => {
  let component: AjoutAssuranceVieComponent;
  let fixture: ComponentFixture<AjoutAssuranceVieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutAssuranceVieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutAssuranceVieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
