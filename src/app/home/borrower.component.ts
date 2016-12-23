import {Component, Input, Output,
        EventEmitter, OnChanges}            from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {IBorrower}                          from "./borrower";
import {GENDER, MARITAL_STATUS}             from "./borrower.const";
import {HomeService}                        from "./home.service";
import {ISegment}                           from "../shared/segment/segment";

@Component({
  selector: 'borrower',
  templateUrl: 'borrower.component.html'
})
export class BorrowerComponent implements OnChanges {
  form: FormGroup;
  segment: ISegment;
  genders = GENDER;
  maritalStatuses = MARITAL_STATUS;
  
  @Input() isCoApp: boolean;
  @Input() pfmFileId: string;
  @Output() changeEvent: EventEmitter<IBorrower> = new EventEmitter<IBorrower>();
  
  constructor(fb: FormBuilder, private _service: HomeService) {
    this.form = fb.group({
      id: null,
      pfmFileId: '',
      isCoApp: false,
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      middleName: '',
      ssn: [null, Validators.required],
      gender: '',
      marital: null,
      dob: '',
      age: null,
      dependents: null,
      phone: null
    });
    // init segment..
    this.segment = this.initSegment();
  }
  
  // input changes..
  ngOnChanges() {
    this.form.reset();
    this._service.getBorrower(this.pfmFileId, this.isCoApp)
      .subscribe(
        data => this.load(data),
        response => {
          if (response.status == 404) {
            alert('Borrower service is not available!');
          }
        }
      );
  }
  
  onSegmentChange($event) {
    this.form.markAsDirty();
  }
  
  // output changes..
  notifyChanges() {
    this.changeEvent.emit(this.form.value);
  }
  
  load(borrowers: IBorrower[]) {
    if (borrowers != null && borrowers.length > 0) {
      this.form.setValue(borrowers[0], {onlySelf: true});
      this.notifyChanges();
    }
  }
  
  save(borrower: IBorrower) {
    console.log('Saving: ' + JSON.stringify(borrower));
    console.log('Saving: ' + JSON.stringify(this.segment));
    
    var result = borrower.id ?
      this._service.updateBorrower(borrower) :
      this._service.addBorrower(borrower);
    
    result.subscribe(x => {
      this.form.patchValue({id: x.id}); // new record
      this.form.markAsPristine();
      this.notifyChanges();
    });
  }
  
  initSegment(): ISegment {
    return {
      overridden: false,
      modified: false,
      supplement: false,
      verified: false,
      deleted: false,
      printable: false,
      chargeable: false,
      status: 4, // None Pending
      remark: ''
    }
  }
}

