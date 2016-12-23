import {NgModule}                           from '@angular/core';
import {CommonModule}                       from '@angular/common';
import {FormsModule, ReactiveFormsModule}   from '@angular/forms';

import {PaginationComponent}                from './pagination.component';
import {SpinnerComponent}                   from './spinner.component';
import {SegmentComponent}                   from './segment/segment.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    PaginationComponent,
    SpinnerComponent,
    SegmentComponent
  ],
  exports: [
    PaginationComponent,
    SpinnerComponent,
    SegmentComponent
  ]
})
export class SharedModule {
}
