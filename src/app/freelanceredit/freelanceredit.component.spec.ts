import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancereditComponent } from './freelanceredit.component';

describe('FreelancereditComponent', () => {
  let component: FreelancereditComponent;
  let fixture: ComponentFixture<FreelancereditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreelancereditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreelancereditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
