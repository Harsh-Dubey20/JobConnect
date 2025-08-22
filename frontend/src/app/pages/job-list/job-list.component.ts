import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job.service';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  jobList: any[] = [];

  constructor(private jobService: JobService, public authService: AuthService) { }

  ngOnInit(): void {
    this.loadJobs();
  }

  loadJobs() {
    this.jobService.getAllJobs().subscribe((result: any) => {
      this.jobList = result;
    });
  }

  onApply(jobId: number) {
    const loggedInUser = this.authService.getLoggedInUser();
    if (!loggedInUser) {
      alert("Please log in to apply for a job.");
      return;
    }
    
    const applicationObj = {
      jobId: jobId,
      candidateId: loggedInUser.id,
      candidateName: loggedInUser.name
    };

    this.jobService.applyForJob(applicationObj).subscribe({
      next: (response) => {
        alert("Application Submitted Successfully!");
      },
      error: (error) => {
        alert("Error Submitting Application");
      }
    });
  }
}