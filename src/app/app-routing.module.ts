import { ProfileComponent } from './profile/profile.component';
import { ActivationComponent } from './activation/activation.component';
import { SignupComponent } from './signup/signup.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { ReturnSubmitComponent } from './return-submit/return-submit.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {path: "header", component: HeaderComponent},
  {path: "footer", component: FooterComponent},
  {path: "login", component: LoginComponent},
  {path: "signup", component: SignupComponent},
  {path: "list-taxpayer", component: ListComponent},
  {path: "activation/:code", component: ActivationComponent},
  {path: "profile", component: ProfileComponent},
  {path: "return-submit", component: ReturnSubmitComponent},
  {path: "payment", component: PaymentComponent},

  // {path: "", component: LoginComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
