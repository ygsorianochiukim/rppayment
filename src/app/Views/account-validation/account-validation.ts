import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LucideAngularModule, SquareAsterisk } from 'lucide-angular';

@Component({
  selector: 'app-account-validation',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './account-validation.html',
  styleUrl: './account-validation.scss',
})
export class AccountValidation implements OnInit {

  readonly OTPIcon = SquareAsterisk;

  @Output() nextStep = new EventEmitter<number>();

  otpsend: boolean = false;

  ngOnInit(): void {
    this.otpsend = localStorage.getItem('otpsend') === 'true';
  }

  validation() {
    if (!this.otpsend) {
      this.otpsend = true;
      localStorage.setItem('otpsend', 'true');
    }
  }
  confirmOTP(){
    localStorage.setItem('step' , '2');
    this.nextStep.emit(2);
  }
}
