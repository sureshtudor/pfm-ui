import {Component, OnInit}  from '@angular/core';
import {IBorrower}          from "./borrower";
import {SearchService}      from "../search/search.service";

@Component({
  templateUrl: 'home.component.html',
})
export class HomeComponent implements OnInit {
  pfmFileId: string;
  
  constructor(private searchService: SearchService) {
  }
  
  ngOnInit() {
    this.searchService.fileSelectedEvent.subscribe(x => this.pfmFileId = x);
  }
  
  appChangeListener(borrower: IBorrower) {
    console.log('APP');
    console.log('Fullname:' + borrower.lastName + ', ' + borrower.firstName);
    console.log('SSN:' + borrower.ssn);
  }
  
  capChangeListener(borrower: IBorrower) {
    console.log('CAP');
    console.log('Fullname:' + borrower.lastName + ', ' + borrower.firstName);
    console.log('SSN:' + borrower.ssn);
  }
}
