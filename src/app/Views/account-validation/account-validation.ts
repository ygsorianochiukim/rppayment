import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, SquareAsterisk } from 'lucide-angular';

@Component({
  selector: 'app-account-validation',
  standalone: true,
  imports: [LucideAngularModule, CommonModule, FormsModule],
  templateUrl: './account-validation.html',
  styleUrl: './account-validation.scss',
})
export class AccountValidation implements OnInit {

  readonly OTPIcon = SquareAsterisk;

  @Output() nextStep = new EventEmitter<number>();
  otp: string = '123456';
  otpConfirmation: string = '';
  otpsend: boolean = false;
  CustomerName = sessionStorage.getItem('name1');
  ContactNumber = sessionStorage.getItem('phone');

  ngOnInit(): void {
    this.otpsend = sessionStorage.getItem('otpsend') === 'true';
  }

  validation() {
    if (!this.otpsend) {
      this.otpsend = true;
      sessionStorage.setItem('otpsend', 'true');
    }
  }
  confirmOTP(){
    sessionStorage.setItem('step' , '2');
    this.nextStep.emit(2);
  }
}
