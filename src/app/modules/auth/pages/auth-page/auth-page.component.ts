import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Auth1Service } from '@modules/auth/services/auth1.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit {

  formLogin: FormGroup = new FormGroup({});

  constructor(private auth1Service: Auth1Service) { }

  ngOnInit(): void {
    this.formLogin = new FormGroup(
      {
        email: new FormControl('',
        [
          Validators.required,
          Validators.email,

        ]),
        password: new FormControl('',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12)

        ])
      }
    )
  }

  sendLogin():void {
    const { email, password} = this.formLogin.value;
    this.auth1Service.sendCredentials(email, password)
  }

}
