import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Auth1Service {

  constructor() { }

  sendCredentials(email: string, password: string):void {
    console.log(email, password)
  }
}
