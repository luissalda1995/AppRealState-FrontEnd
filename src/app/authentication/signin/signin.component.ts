import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { LocalStorageService, SessionStorageService } from 'ng2-webstorage';
import {Observable} from 'rxjs/Observable';
import {SigninService} from './signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  authenticationError: boolean;
  public form: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private siginService: SigninService) {}

  ngOnInit() {
    this.form = this.fb.group ( {
      uname: [null , Validators.compose ( [ Validators.required ] )] , password: [null , Validators.compose ( [ Validators.required ] )]
    } );
  }

  login() {
    this.siginService.login({
      username: this.form.value.uname,
      password: this.form.value.password,
      rememberMe: this.form.value.rememberMe
    }).then(() => {
      this.authenticationError = false;
      if (this.router.url === '/register' || (/activate/.test(this.router.url)) ||
        this.router.url === '/finishReset' || this.router.url === '/requestReset') {
        this.router.navigate(['']);
      }

      /*this.eventManager.broadcast({
        name: 'authenticationSuccess',
        content: 'Sending Authentication Success'
      });*/

      // // previousState was set in the authExpiredInterceptor before being redirected to login modal.
      // // since login is succesful, go to stored previousState and clear previousState
      /*const redirect = this.stateStorageService.getUrl();
      if (redirect) {
        this.router.navigate([redirect]);
      }*7
    }).catch(() => {
      this.authenticationError = true;
    });
  }

}
