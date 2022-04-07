import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginData = {
    userName: '',
    password: ''
  }

  constructor(private authService: AuthService, private router: Router) { }

  login(){
    this.authService.login(this.loginData).subscribe((data:any) => {
      localStorage.setItem('userName', data.result.userName);
      localStorage.setItem('token_value', data.result.token);
      this.router.navigate(['/clientes']);
    },
    (errorData) => alert(errorData.error.displayMessage));
  }


}
