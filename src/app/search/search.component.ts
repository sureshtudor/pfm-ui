import {Component, OnInit}        from '@angular/core';
import {NgbActiveModal}           from '@ng-bootstrap/ng-bootstrap';
import {IPfmFile, SearchService}  from "./search.service";

@Component({
  selector: 'search',
  templateUrl: 'search.component.html'
})
export class SearchComponent implements OnInit {
  pfmFiles: IPfmFile[];
  isLoading: boolean;
  
  constructor(public activeModal: NgbActiveModal,
              private searchService: SearchService) {
  }
  
  ngOnInit() {
    this.isLoading = true;
    this.searchService.getPfmFiles()
      .subscribe(data => this.pfmFiles = data,
        null, () => this.isLoading = false);
  }
  
  fileSelected(file: IPfmFile) {
    this.searchService.fileSelected(file);
    this.activeModal.close();
  }
}
