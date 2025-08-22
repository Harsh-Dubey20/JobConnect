import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'http://localhost:8080/api/auth';
  apiUserUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) { }

  register(user: any) {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  login(user: any) {
    return this.http.post(`${this.apiUrl}/login`, user);
  }

  updateUser(userId: number, userDetails: any, resumeFile: File | null) {
    const formData = new FormData();
    formData.append('userDetails', new Blob([JSON.stringify(userDetails)], { type: 'application/json' }));
    
    if (resumeFile) {
      formData.append('resumeFile', resumeFile);
    }

    return this.http.put(`${this.apiUserUrl}/${userId}`, formData);
  }
}
