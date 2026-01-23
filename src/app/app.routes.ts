import { Routes } from '@angular/router';
import { PersonalInquiry } from './Views/personal-inquiry/personal-inquiry';
import { AccountValidation } from './Views/account-validation/account-validation';

export const routes: Routes = [
    {path : '' , redirectTo: 'userCredentials' , pathMatch: 'full'},
    {path: 'userCredentials' , component: PersonalInquiry},
    {path: 'userValidation' , component: AccountValidation},
];
