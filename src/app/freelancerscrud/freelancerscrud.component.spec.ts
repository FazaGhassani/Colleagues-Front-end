import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerscrudComponent } from './freelancerscrud.component';

describe('FreelancerscrudComponent', () => {
  let component: FreelancerscrudComponent;
  let fixture: ComponentFixture<FreelancerscrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreelancerscrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreelancerscrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
