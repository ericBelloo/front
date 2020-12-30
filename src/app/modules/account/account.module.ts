import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// components
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AccountRoutingModule } from './account-routing.module'
// servicios 
import { AccountService } from './account.service';

@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
  ],
  imports: [
    CommonModule,    
    AccountRoutingModule,    
  ],
  exports:[
    LoginComponent,
    SignUpComponent,
    AccountRoutingModule,
  ],
  providers: [
    AccountService
  ]
})
export class AccountModule { }
