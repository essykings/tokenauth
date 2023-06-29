import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent {
  myDetails: any;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.getProfileData();
  }
  getProfileData(): void {
    this.authService.profile().subscribe(
      (response: any) => {
        this.myDetails = response;
        console.log('User Data:', this.myDetails);
      },
      (error: any) => {
        console.error('Error retrieving profile data',error);
      }
    );
  }

}