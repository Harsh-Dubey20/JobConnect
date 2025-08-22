import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { JobListComponent } from './pages/job-list/job-list.component';
import { PostJobComponent } from './pages/post-job/post-job.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';

export const routes: Routes = [
    { path: '', redirectTo: '/jobs', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'jobs', component: JobListComponent },
    { path: 'post-job', component: PostJobComponent },
    { path: 'edit-profile', component: EditProfileComponent }
];