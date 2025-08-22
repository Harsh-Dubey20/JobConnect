import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerObj: any = {
    name: '',
    email: '',
    password: '',
    role: 'CANDIDATE'
  };

  constructor(private userService: UserService) { }

  onRegister() {
    this.userService.register(this.registerObj).subscribe({
      next: (response) => {
        alert("Registration Successful!");
      },
      error: (error) => {
        alert("Registration Failed!");
        console.error(error);
      }
    });
  }
}