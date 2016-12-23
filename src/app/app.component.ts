import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
        <navbar></navbar>
        <br/>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
        <template ngbModalContainer></template>
    `
})
export class AppComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    // clear login cache.
    localStorage.removeItem("userId");
    // clear selected file cache.
    localStorage.removeItem("pfmFileId");
    localStorage.removeItem("isReadOnly");
  }
}
