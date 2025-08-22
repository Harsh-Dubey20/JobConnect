import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  profileObj: any = {
    name: '',
    headline: '',
    skills: ''
  };
  loggedInUser: any;
  selectedFile: File | null = null;

  constructor(
    private router: Router, 
    private userService: UserService, 
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.loggedInUser = this.authService.getLoggedInUser();
    if (this.loggedInUser) {
      // In a real app, you would fetch the full profile from the backend here
      this.profileObj.name = this.loggedInUser.name;
    }
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  onSave() {
    if (!this.loggedInUser) return;

    this.userService.updateUser(this.loggedInUser.id, this.profileObj, this.selectedFile).subscribe({
      next: (response) => {
        alert("Profile Updated Successfully!");
        this.router.navigateByUrl('/dashboard');
      },
      error: (error) => {
        alert("Error updating profile.");
        console.error(error);
      }
    });
  }
}