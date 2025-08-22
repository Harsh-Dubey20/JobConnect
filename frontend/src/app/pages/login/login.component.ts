import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginObj: any = { email: '', password: '' };

  constructor(private userService: UserService, private router: Router) { }

  onLogin() {
    this.userService.login(this.loginObj).subscribe({
      next: (response: any) => {
        localStorage.setItem('jobPortalUser', JSON.stringify(response));
        alert("Login Successful!");
        this.router.navigateByUrl('/dashboard');
      },
      error: (error) => {
        alert("Login Failed: " + (error.error.message || error.error));
      }
    });
  }
}