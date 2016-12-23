import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router}                       from '@angular/router';
import {NgbModal}                     from '@ng-bootstrap/ng-bootstrap';
import {AuthenticationService}        from '../login/authentication.service'
import {SearchComponent}              from "../search/search.component";
import {SearchService}                from "../search/search.service";

@Component({
  selector: 'navbar',
  templateUrl: 'navbar.component.html'
})
export class NavBarComponent implements OnInit, OnDestroy {
  
  isAuthenticated: boolean;
  authenticatedUser: string;
  selectedPfmFileId = 'Open File';
  
  constructor(private router: Router,
              private authService: AuthenticationService,
              private searchService: SearchService,
              private searchModal: NgbModal) {
  }
  
  ngOnInit() {
    this.authService.loggedInEvent.subscribe(x => this.loggedInListener(x));
    this.searchService.fileSelectedEvent.subscribe(x => this.fileSelectionListener(x));
  }
  
  ngOnDestroy() {
    this.authService.loggedInEvent.unsubscribe();
    this.searchService.fileSelectedEvent.unsubscribe();
  }
  
  openSearchModal() {
    this.searchModal.open(SearchComponent);
  }
  
  loginOrOut() {
    if (this.isAuthenticated) {
      this.isAuthenticated = false;
      this.authenticatedUser = '';
      this.authService.logout();
      this.searchService.fileReset();
    }
    else {
      this.router.navigate(['/login']);
    }
  };
  
  //********************* Listeners **************************//
  private loggedInListener(name: string) {
    this.isAuthenticated = true;
    this.authenticatedUser = name;
  }
  
  private fileSelectionListener(pfmFileId: string) {
    this.selectedPfmFileId = pfmFileId;
  }
}
