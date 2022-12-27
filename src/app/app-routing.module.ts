import { SignupComponent } from './signup/signup.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: "header", component: HeaderComponent},
  {path: "footer", component: FooterComponent},
  {path: "login", component: LoginComponent},
  {path: "signup", component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
