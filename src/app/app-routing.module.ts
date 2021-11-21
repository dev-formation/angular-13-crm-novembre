import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageForgotPasswordComponent } from './login/page/page-forgot-password/page-forgot-password.component';
import { PageResetPasswordComponent } from './login/page/page-reset-password/page-reset-password.component';
import { PageSignInComponent } from './login/page/page-sign-in/page-sign-in.component';
import { PageSignUpComponent } from './login/page/page-sign-up/page-sign-up.component';

const routes: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full'},
  { path: 'sign-in', component: PageSignInComponent },
  { path: 'sign-up', component: PageSignUpComponent },
  { path: 'reset', component: PageResetPasswordComponent },
  { path: 'forgot', component: PageForgotPasswordComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
