import { Component } from '@angular/core';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  password: string = '';
  email: string = '';
  

  constructor(private authService:AuthService){}

  signup(): void {
    this.authService.signin(this.email, this.password).subscribe(
      (response) => {
        // success response
        console.log('Authentication successful', response);
       
      },
      (error) => {
        // error response
        console.error('Authentication error', error);
      }
    );
  }
}
