import { Component } from '@angular/core';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  login(): void {
    this.authService.authenticate(this.email, this.password).subscribe(
      (response) => {
        // success response
        console.log('Signin successful', response);
      
      },
      (error) => {
        // error response
        console.error('Signin error', error);
      }
    );
  }
}
