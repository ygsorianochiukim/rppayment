import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LucideAngularModule, RectangleEllipsis } from 'lucide-angular';

@Component({
  selector: 'app-personal-inquiry',
  imports: [LucideAngularModule],
  templateUrl: './personal-inquiry.html',
  styleUrl: './personal-inquiry.scss',
})
export class PersonalInquiry {
  readonly fieldIcon = RectangleEllipsis;
  @Output() nextStep = new EventEmitter<number>();
  constructor(private route: Router) {}

  validation(){
    localStorage.setItem('form_phase' , 'CustomerValidation');
    localStorage.setItem('step' , '1');
    this.nextStep.emit(1);
  }

}
