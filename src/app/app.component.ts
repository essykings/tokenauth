import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tokenauth';
  constructor(private authService: AuthService) {}

  logout(): void {
    this.authService.logout();
    localStorage.removeItem('token');
  }
}
