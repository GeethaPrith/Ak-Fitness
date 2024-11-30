import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import AuthSigninComponent from './auth-signin/auth-signin.component';
import AuthSignupComponent from './auth-signup/auth-signup.component';
import { ResetPasswordComponent  } from './reset-password/reset-password.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, AuthenticationRoutingModule,AuthSigninComponent,AuthSignupComponent,ResetPasswordComponent]
})
export class AuthenticationModule {}