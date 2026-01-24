import { Routes } from '@angular/router';
import { PersonalInquiry } from './Views/personal-inquiry/personal-inquiry';
import { AccountValidation } from './Views/account-validation/account-validation';
import { Forms } from './Views/forms/forms';

export const routes: Routes = [
    {path : '' , redirectTo: 'forms' , pathMatch: 'full'},
    {path: 'forms' , component: Forms},
    {path: 'userValidation' , component: AccountValidation},
];
