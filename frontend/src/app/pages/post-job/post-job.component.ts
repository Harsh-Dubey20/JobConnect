import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-post-job',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent {
  jobObj: any = {
    title: '',
    description: '',
    location: '',
    salary: ''
  };

  constructor(private jobService: JobService) { }

  onPostJob() {
    this.jobService.postJob(this.jobObj).subscribe({
      next: (response) => {
        alert("Job Posted Successfully!");
      },
      error: (error) => {
        alert("Error Posting Job");
      }
    });
  }
}
