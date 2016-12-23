import {NgModule}         from '@angular/core';
import {CommonModule}     from '@angular/common';

import {SearchComponent}  from "./search.component";
import {SearchService}    from "./search.service";
import {SharedModule}     from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    SearchComponent
  ],
  declarations: [
    SearchComponent
  ],
  providers: [
    SearchService
  ]
})
export class SearchModule {
}
