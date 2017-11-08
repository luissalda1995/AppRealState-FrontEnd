import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

const password = new FormControl('', Validators.required);
const confirmPassword = new FormControl('', CustomValidators.equalTo(password));

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public form: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient) {}

  ngOnInit() {
    this.form = this.fb.group( {
      uname: [null , Validators.compose ( [ Validators.required ] )],
      password: password,
      confirmPassword: confirmPassword
    } );
  }

  onSubmit(): Observable<Response> {
    const account = {
      username: this.form.value.uname,
      password: this.form.value.password
    };
    return this.http.post('api/account', account);
  }

}
