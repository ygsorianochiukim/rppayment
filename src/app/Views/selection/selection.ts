import { Component, EventEmitter, Output } from '@angular/core';
import { HandCoins, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-selection',
  imports: [LucideAngularModule],
  templateUrl: './selection.html',
  styleUrl: './selection.scss',
})
export class Selection {

  @Output() nextStep = new EventEmitter<number>();
  readonly CashIcons = HandCoins;

  constructor() {}

  LSPayments(){
    localStorage.setItem('step' , '3');
    this.nextStep.emit(3);
  }
}
