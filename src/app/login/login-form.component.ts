import {Component, OnInit, ViewChild}       from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router}                             from '@angular/router';
import {NgbModal, NgbModalRef}              from '@ng-bootstrap/ng-bootstrap';
import {AuthenticationService, IUser}       from './authentication.service'
import {BasicValidators}                    from '../shared/basicValidators'

@Component({
  selector: 'login-form',
  templateUrl: 'login-form.component.html'
})
export class LoginFormComponent implements OnInit {
  
  loginForm: FormGroup;
  errorMsg: string;
  modalRef: NgbModalRef;
  @ViewChild('content') content: string;
  
  constructor(private _fb: FormBuilder,
              private _router: Router,
              private _service: AuthenticationService,
              private _modalService: NgbModal) {
  }
  
  ngOnInit() {
    this.loginForm = this._fb.group({
      email: ['suresh@google.com', BasicValidators.email],
      password: ['password', [Validators.required, Validators.minLength(5)]]
    });
    
    this.modalRef = this._modalService.open(this.content);
    this.modalRef.result.then(
      (result) => {
        this.close(); // closed.
      },
      (reason) => {
        this.close(); // dismissed
      });
  }
  
  close() {
    this._router.navigate(['/']);
  }
  
  login(user: IUser) {
    this._service.login(user)
      .subscribe(
        data => {
          if (data) {
            this.modalRef.close(); // login success
          }
          else {
            this.errorMsg = 'Login Failure!';
          }
        },
        error => {
          this.errorMsg = error;
        });
  }
}
