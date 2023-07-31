import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  login(username: string, password: string){
    if( username == 'david' && password == '12345'){
      return 200;
    }
    else{
      return 403;
    }
  }
}
