import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PageForgotPasswordComponent } from './login/page/page-forgot-password/page-forgot-password.component';
import { PageResetPasswordComponent } from './login/page/page-reset-password/page-reset-password.component';
import { PageSignInComponent } from './login/page/page-sign-in/page-sign-in.component';
import { PageSignUpComponent } from './login/page/page-sign-up/page-sign-up.component';
import { PageEditOrderComponent } from './orders/page/page-edit-order/page-edit-order.component';

const routes: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full'},
  { path: 'orders', loadChildren : () => import('./orders/orders.module').then(m => m.OrdersModule) },
  { path: 'clients', loadChildren : () => import('./clients/clients.module').then(m => m.ClientsModule) },
  { path: '**', loadChildren : () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, 
    { preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
