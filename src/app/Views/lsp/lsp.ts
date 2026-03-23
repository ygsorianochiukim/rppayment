import { Component, OnInit } from '@angular/core';
import { Banknote, LucideAngularModule } from 'lucide-angular';
import { UserServices } from '../../Services/LSP/User/user-services';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LotsPayment } from '../../Models/LSP/LotsPayment/lots-payment.model';

@Component({
  selector: 'app-lsp',
  standalone: true,
  imports: [
    LucideAngularModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './lsp.html',
  styleUrl: './lsp.scss',
  providers: [UserServices]
})
export class Lsp implements OnInit {

  readonly CashIcon = Banknote;

  displayAllocation: boolean = false;
  bparID: string | null = sessionStorage.getItem('bpar_i_person_id');

  paymentLots: LotsPayment[] = [];

  allocationForm!: FormGroup;

  constructor(
    private userServices: UserServices,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.displayLotSalesPayment();
  }

  /* ---------------- FORM SETUP ---------------- */

  initializeForm() {
    this.allocationForm = this.fb.group({
      allocations: this.fb.array([])
    });
  }

  get allocations(): FormArray {
    return this.allocationForm.get('allocations') as FormArray;
  }

  /* ---------------- DATA FETCH ---------------- */

  displayLotSalesPayment() {
    if (!this.bparID) return;

    this.userServices.getLots(this.bparID).subscribe({
      next: (res: any) => {
        this.paymentLots = res.data || [];

        // if Allocate already selected, rebuild fields
        if (this.displayAllocation) {
          this.buildAllocationFields();
        }
      },
      error: (err) => {
        console.error('Failed to load lots', err);
      }
    });
  }

  /* ---------------- ALLOCATION MODE ---------------- */

  displayAllocate() {
    this.displayAllocation = true;
    this.buildAllocationFields();
  }

  hideAllocate() {
    this.displayAllocation = false;
    this.allocations.clear();
  }

  buildAllocationFields() {
    this.allocations.clear();

    this.paymentLots.forEach(lot => {
      this.allocations.push(
        this.fb.group({
          lot: [lot.lot],
          amount: [
            '',
            [
              Validators.required,
              Validators.min(1)
            ]
          ]
        })
      );
    });
  }

  /* ---------------- SUBMIT ---------------- */

  submitAllocation() {
    if (this.allocationForm.invalid) {
      this.allocationForm.markAllAsTouched();
      return;
    }

    const payload = {
      bparID: this.bparID,
      allocations: this.allocationForm.value.allocations
    };

    console.log('ALLOCATED PAYMENT PAYLOAD:', payload);

    // Example:
    // this.userServices.submitLotPayment(payload).subscribe(...)
  }
}
