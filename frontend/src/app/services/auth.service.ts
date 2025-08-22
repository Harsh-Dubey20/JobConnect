import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('jobPortalUser');
  }

  getLoggedInUser(): any {
    const userData = localStorage.getItem('jobPortalUser');
    if (userData) {
      return JSON.parse(userData);
    }
    return null;
  }

  getUserRole(): string | null {
    const user = this.getLoggedInUser();
    return user ? user.role : null;
  }
}
