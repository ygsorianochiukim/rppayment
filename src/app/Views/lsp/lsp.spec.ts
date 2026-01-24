import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lsp } from './lsp';

describe('Lsp', () => {
  let component: Lsp;
  let fixture: ComponentFixture<Lsp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lsp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lsp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
