import {NgModule}           from '@angular/core';
import {CommonModule}       from '@angular/common';
import {HttpModule}         from '@angular/http';
import {RouterModule}       from "@angular/router";
import {NgbModule}          from '@ng-bootstrap/ng-bootstrap';

import {NavBarComponent}    from "./navbar.component";
import {NotFoundComponent}  from "./not-found.component";
import {SearchModule}       from "../search/search.module";
import {SearchComponent}    from "../search/search.component";

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule,
    NgbModule,
    SearchModule
  ],
  declarations: [
    NavBarComponent,
    NotFoundComponent
  ],
  exports: [
    NavBarComponent,
    NotFoundComponent
  ],
  providers: [],
  entryComponents: [
    SearchComponent
  ]
})
export class NavbarModule {
}
