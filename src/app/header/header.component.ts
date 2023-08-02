import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router: Router,private authentication: AuthenticationService){}
  redirectHome(){
    this.router.navigate(['home']);
  }
  isLoginPage(): boolean {
    
    const currentRoute = this.router.url;

    return currentRoute === '/login';
  }

  isRegisterPage(): boolean {
    
    const currentRoute = this.router.url;

    return currentRoute === '/register';
  }
  
  logout() {
    this.authentication.logout();
    
  }
}
