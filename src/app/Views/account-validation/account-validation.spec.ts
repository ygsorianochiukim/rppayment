import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountValidation } from './account-validation';

describe('AccountValidation', () => {
  let component: AccountValidation;
  let fixture: ComponentFixture<AccountValidation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountValidation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountValidation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
