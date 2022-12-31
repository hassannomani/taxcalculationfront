import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from 'src/material.module';
import { MainMenuComponent } from './layout/main-menu/main-menu.component';
import { LoginSignupMenuComponent } from './layout/login-signup-menu/login-signup-menu.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { ButtonComponent } from './uitools/button/button.component';
import { ListComponent } from './list/list.component';
import { ActivationComponent } from './activation/activation.component';
import { ProfileComponent } from './profile/profile.component';
import { LogoutMenuComponent } from './layout/logout-menu/logout-menu.component';
import { ReturnSubmitComponent } from './return-submit/return-submit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainMenuComponent,
    LoginSignupMenuComponent,
    LoginComponent,
    SignupComponent,
    ButtonComponent,
    ListComponent,
    ActivationComponent,
    ProfileComponent,
    LogoutMenuComponent,
    ReturnSubmitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
