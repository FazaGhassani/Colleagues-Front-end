import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerslistComponent } from './freelancerslist.component';

describe('FreelancerslistComponent', () => {
  let component: FreelancerslistComponent;
  let fixture: ComponentFixture<FreelancerslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreelancerslistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreelancerslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
