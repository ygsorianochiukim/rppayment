import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalInquiry } from './personal-inquiry';

describe('PersonalInquiry', () => {
  let component: PersonalInquiry;
  let fixture: ComponentFixture<PersonalInquiry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalInquiry]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalInquiry);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
