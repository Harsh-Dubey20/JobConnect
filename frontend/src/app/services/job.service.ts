import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  apiUrl = 'http://localhost:8080/api/jobs';
  apiApplicationUrl = 'http://localhost:8080/api/applications';

  constructor(private http: HttpClient) { }

  postJob(job: any) {
    return this.http.post(this.apiUrl, job);
  }

  getAllJobs() {
    return this.http.get(this.apiUrl);
  }

  applyForJob(application: any) {
    return this.http.post(this.apiApplicationUrl, application);
  }
}
