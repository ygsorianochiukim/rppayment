import { Component, OnInit } from '@angular/core';
import { PersonalInquiry } from "../personal-inquiry/personal-inquiry";
import { AccountValidation } from "../account-validation/account-validation";
import { Selection } from "../selection/selection";
import { Lsp } from "../lsp/lsp";

@Component({
  selector: 'app-forms',
  imports: [PersonalInquiry, AccountValidation, Selection, Lsp],
  templateUrl: './forms.html',
  styleUrl: './forms.scss',
})
export class Forms implements OnInit {

  phaseLocator = localStorage.getItem('form_phase');
  currentphase: string = '';
  step: number = Number(localStorage.getItem('step')) || 0;

  
  constructor() {}

  ngOnInit(): void {
  }

  setStep(step: number){
    this.step = step;
    localStorage.setItem('step', step.toString());
  }
}
