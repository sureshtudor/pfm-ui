import {NgModule}       from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {NgbModule}      from '@ng-bootstrap/ng-bootstrap';
// app modules..
import {AppComponent}   from './app.component';
import {NavbarModule}   from "./navbar/navbar.module";
import {SharedModule}   from './shared/shared.module';
import {HomeModule}     from './home/home.module';
import {LoginModule}    from './login/login.module';
import {SearchModule}   from "./search/search.module";
// routes..
import {routing}        from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    NavbarModule,
    SharedModule,
    HomeModule,
    LoginModule,
    SearchModule,
    routing
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
