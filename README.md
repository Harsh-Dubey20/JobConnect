⚙️JobConnect: A Full-Stack Job Portal Application

A modern, secure, and responsive web application built with Angular and Spring Boot to streamline the recruitment process by connecting job seekers with employers.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------

✨ Key Features
JobConnect provides a role-based experience with distinct features for Candidates and Recruiters.

User Authentication: Secure registration and login functionality for both user types.

JWT Security: Backend APIs are secured using JSON Web Tokens (JWT) to ensure safe communication.

Role-Based Access Control: The application's UI and API access change dynamically based on the user's role (e.g., only Recruiters can see the "Post a Job" link).

Job Posting (Recruiter): Logged-in recruiters have a dedicated interface to create and post new job listings.

Job Listings (Candidate): Users can view a clean, paginated list of all available job openings.

Job Application (Candidate): Logged-in candidates can apply for jobs with a single click.

Profile Management: A dedicated page for users to update their professional details and upload a resume.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------


🛠️ Technology Stack & Architecture
This project was built using a modern, decoupled 3-tier architecture.

Frontend:

Angular 17: A powerful framework for building dynamic and responsive single-page applications.

TypeScript: For type-safe code.

HTML5 / CSS3: For structure and styling.

Backend:

Spring Boot 3: For creating robust and secure REST APIs.

Java 17: The core programming language.

Spring Security: For handling authentication and role-based authorization with JWT.

Spring Data JPA / Hibernate: For object-relational mapping and database communication.

Maven: For project build and dependency management.

Database:

MySQL: A reliable relational database for storing all application data.
