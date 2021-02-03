import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheAssuranceVieComponent } from './affiche-assurance-vie.component';

describe('AfficheAssuranceVieComponent', () => {
  let component: AfficheAssuranceVieComponent;
  let fixture: ComponentFixture<AfficheAssuranceVieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficheAssuranceVieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficheAssuranceVieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
