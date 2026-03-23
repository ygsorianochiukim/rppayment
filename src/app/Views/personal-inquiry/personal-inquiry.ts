import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LucideAngularModule, RectangleEllipsis } from 'lucide-angular';
import { UserServices } from '../../Services/LSP/User/user-services';
import { HttpClientModule } from '@angular/common/http';
import { User } from '../../Models/LSP/User/user.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserIdentification } from '../../Models/LSP/User/user-indentification.model';

@Component({
  selector: 'app-personal-inquiry',
  imports: [LucideAngularModule, HttpClientModule, CommonModule , FormsModule],
  templateUrl: './personal-inquiry.html',
  styleUrl: './personal-inquiry.scss',
  providers: [UserServices]
})
export class PersonalInquiry implements OnInit {

  readonly fieldIcon = RectangleEllipsis;
  @Output() nextStep = new EventEmitter<number>();

  NameField: User = {
    lastname: '',
    middlename: '',
    firstname: '',
  }
  UserInfo: UserIdentification = {
    bpar_i_person_id: null,
    mp_i_owner_id: null,
    name1: '',
    phone: '',
  };

  constructor(private route: Router , private UserServices: UserServices) {}


  ngOnInit(): void {
    
  }

  validation(){
    this.UserServices.getCustomerName(this.NameField).subscribe((data:any) =>{
      if (data.data.bpar_i_person_id) {
        alert('Name Found');
        sessionStorage.setItem('bpar_i_person_id',data.data.bpar_i_person_id)
        sessionStorage.setItem('mp_i_owner_id',data.data.mp_i_owner_id)
        sessionStorage.setItem('name1',data.data.name1)
        sessionStorage.setItem('phone',data.data.phone)
        sessionStorage.setItem('form_phase' , 'CustomerValidation');
        sessionStorage.setItem('step' , '1');
        this.nextStep.emit(1);
      }
      else{
        alert('Name Not Found');
      }
    });
    
  }
}
