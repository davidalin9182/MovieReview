import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';
  constructor(private authentication: AuthenticationService,private router:Router){
    
  }

  login() {
    if (this.username.trim().length === 0) {
      this.errorMessage = 'Username is required';
    }
    else if (this.password.trim().length === 0) {
      this.errorMessage = 'Password is required';
    }
    else {
      this.errorMessage = '';
      let res = this.authentication.login(this.username, this.password);
      if(res === 200){
        this.router.navigate(['/home']);
      }
      else if(res === 403){
        this.errorMessage = 'Invalid username or password';
      }
    }
  }
}
