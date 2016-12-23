import {NgModule}                         from '@angular/core';
import {CommonModule}                     from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule}                        from '@ng-bootstrap/ng-bootstrap';

import {AuthenticationService}            from './authentication.service';
import {LoginFormComponent}               from './login-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  exports: [
    LoginFormComponent
  ],
  declarations: [
    LoginFormComponent
  ],
  providers: [
    AuthenticationService,
  ]
})
export class LoginModule {
}
