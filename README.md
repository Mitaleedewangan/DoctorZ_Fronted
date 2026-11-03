# 🏥 DoctorZ – Doctor Patient Management System

**DoctorZ** is a full-stack healthcare management platform designed to simplify interactions between doctors and patients. It provides features for doctor discovery, clinic search, lab tests, appointment booking, patient management, and online consultations.

Built using **React.js, TypeScript, Node.js, Express.js, and MongoDB**, DoctorZ aims to make healthcare services more accessible through a modern and user-friendly web application.

---

## 🌐 Live Demo

* **Frontend:** [DoctorZ Application](https://doctorz-fronted.vercel.app/)
* **Backend API:** [DoctorZ Backend](https://doctorz-main.onrender.com)

---

## 📸 Screenshots

### 🏠 Homepage

The homepage provides access to doctor search, clinic discovery, lab tests, and other healthcare services.

<img width="1900" height="870" alt="image" src="https://github.com/user-attachments/assets/2b024f35-2d40-4782-91b2-c4d302f68ec3" />


👨‍⚕️ Find Doctors

Users can search for doctors and explore available doctor profiles.

<img width="1897" height="872" alt="image" src="https://github.com/user-attachments/assets/20365f10-4999-4a2e-b9e6-83dbce5d5425" />

🏥 Find Clinics

Users can explore clinics and view clinic-related information.

<img width="1896" height="863" alt="image" src="https://github.com/user-attachments/assets/fe6bbca2-d0ea-4512-bc67-d7a1a9b3c5db" />


### 👨‍⚕️ Doctor Dashboard

Doctors can manage their appointments, schedules, patients, and related activities.

<img width="1900" height="870" alt="image" src="https://github.com/user-attachments/assets/380b7401-f47e-4118-a49b-25e74f042753" />

🧪 Lab Tests

Users can explore available lab tests and related information.

<img width="1900" height="872" alt="image" src="https://github.com/user-attachments/assets/87ed1d96-6ad7-4748-aa20-b6b67c8ad069" />


### 📅 Appointment Booking

Users can book appointments and interact with the appointment management interface.



<img width="1902" height="870" alt="image" src="https://github.com/user-attachments/assets/4686e00b-2b36-47ac-b91e-0239466f963b" />


---

## 📌 Table of Contents

* [Overview](#-overview)
* [Features](#-features)
* [My Contribution](#-my-contribution)
* [Tech Stack](#️-tech-stack)
* [System Architecture](#️-system-architecture)
* [Application Workflow](#-application-workflow)
* [Installation and Setup](#-installation-and-setup)
* [Environment Variables](#-environment-variables)
* [Running the Application](#️-running-the-application)
* [Project Structure](#-project-structure)
* [Future Improvements](#-future-improvements)
* [Live Links](#-live-links)
* [Team](#-team)

---

## 🌍 Overview

DoctorZ is a web-based healthcare management system developed to connect patients with healthcare professionals and simplify healthcare-related activities.

The platform provides different sections for users, doctors, clinics, laboratories, and administrators.

Users can explore doctors, search for clinics, access lab test-related services, and book appointments. Doctors can manage their schedules, availability, appointments, and patient information through their dashboard.

The application follows a frontend-backend architecture, with React and TypeScript handling the user interface and Node.js with Express.js managing backend operations.

---

## ✨ Features

### 🔐 1. Authentication and Authorization

* User registration and login.
* JWT-based authentication.
* Protected routes using authentication middleware.
* Role-based access to application sections.
* Authentication state management using React Context API.

### 👨‍⚕️ 2. Doctor Management

* Find and explore doctors.
* Doctor search functionality.
* Doctor profile viewing.
* Doctor dashboard.
* Doctor profile management.
* Doctor availability and time-slot management.

### 📅 3. Appointment Management

* Appointment booking.
* Appointment form and booking drawer.
* Doctor availability management.
* Appointment scheduling.
* Appointment-related information management.

### 🏥 4. Clinic Management

* Find clinics.
* Browse clinic-related information.
* Clinic details and management interfaces.

### 🧪 5. Lab Test Services

* Explore lab tests.
* Browse available lab test information.
* Lab-related pages and interfaces.

### 💬 6. Communication and Consultation

* Patient chat interface.
* Video consultation integration using Jitsi Meet.
* Doctor-patient communication functionality.

### 👥 7. Patient Management

* Patient-related information management.
* Patient dashboard functionality.
* Patient records and related information.

### 🛠️ 8. Admin Management

* Dedicated admin pages.
* Admin sidebar and navigation.
* Administrative management interfaces.

---

## 👩‍💻 My Contribution

DoctorZ was developed collaboratively by a team of five members.

My primary contribution focused on the **Doctor Dashboard and its related functionalities**.

### Key Responsibilities

* Developed doctor dashboard components using React.js and TypeScript.
* Worked on appointment booking and scheduling functionality.
* Implemented doctor availability and time-slot management.
* Worked on real-time chat functionality between doctors and patients.
* Developed patient management and patient record-related interfaces.
* Worked on authentication-related functionality.
* Integrated frontend components with backend REST APIs.
* Worked on appointment-related notifications and dashboard functionality.
* Tested API integration and frontend-backend communication.

---

## 🛠️ Tech Stack

| Category            | Technologies         |
| ------------------- | -------------------- |
| Frontend            | React.js, TypeScript |
| Build Tool          | Vite                 |
| Styling             | CSS                  |
| Backend             | Node.js, Express.js  |
| Database            | MongoDB              |
| Authentication      | JWT                  |
| API Communication   | REST APIs            |
| State Management    | React Context API    |
| Video Consultation  | Jitsi Meet           |
| API Testing         | Postman              |
| Version Control     | Git, GitHub          |
| Frontend Deployment | Vercel               |
| Backend Deployment  | Render               |

---

## 🏗️ System Architecture

DoctorZ follows a client-server architecture in which the frontend communicates with the backend through API requests.

```text
                 ┌─────────────────────────┐
                 │          Users          │
                 │  Doctors / Patients     │
                 └────────────┬────────────┘
                              │
                              ▼
                 ┌─────────────────────────┐
                 │     React Frontend      │
                 │       TypeScript        │
                 │                         │
                 │  Doctor Dashboard       │
                 │  Patient Dashboard      │
                 │  Appointment Booking    │
                 │  Clinic & Lab Pages     │
                 │  Admin Pages            │
                 └────────────┬────────────┘
                              │
                         REST APIs
                              │
                              ▼
                 ┌─────────────────────────┐
                 │     Express Backend     │
                 │       Node.js           │
                 │                         │
                 │  Authentication        │
                 │  API Routes             │
                 │  Controllers            │
                 │  Business Logic         │
                 └────────────┬────────────┘
                              │
                              ▼
                 ┌─────────────────────────┐
                 │        MongoDB          │
                 │                         │
                 │  User Information       │
                 │  Doctor Information     │
                 │  Appointments           │
                 │  Patient Information    │
                 └─────────────────────────┘

                 External Integration
                 ┌─────────────────────────┐
                 │       Jitsi Meet        │
                 │   Video Consultation    │
                 └─────────────────────────┘
```

---

## ⚙️ Application Workflow

### Step 1: User Registration and Login

Users can register and log in to access the application. Authentication is handled using JWT.

### Step 2: Dashboard Navigation

After authentication, users can access the relevant application sections according to their role.

### Step 3: Doctor Discovery

Users can search for doctors and explore their profiles.

### Step 4: Appointment Booking

Users can interact with the appointment booking interface and select available appointment slots.

### Step 5: Doctor Dashboard

Doctors can manage their appointments, schedules, availability, and patient-related information.

### Step 6: Communication and Consultation

The application provides patient chat functionality and video consultation integration through Jitsi Meet.

### Step 7: Backend and Database Operations

The frontend communicates with backend APIs. The backend processes requests and interacts with MongoDB to manage application data.

---

## 🚀 Installation and Setup

### Prerequisites

Make sure you have installed:

* Node.js
* npm
* Git
* A code editor such as VS Code

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Navigate to the project directory:

```bash
cd DoctorZ
```

### 2. Navigate to Frontend

```bash
cd frontend
```

### 3. Install Dependencies

```bash
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file in the frontend root directory.

Add the backend API base URL:

```env
VITE_API_BASE=https://doctorz-main.onrender.com
```

The frontend uses this environment variable to communicate with the deployed backend.

**Important:** Never commit private credentials, database connection strings, or secret keys to GitHub.

---

## ▶️ Running the Application

Start the frontend development server:

```bash
npm run dev
```

Vite will display the local development URL in the terminal.

Open the application in your browser, usually:

```text
http://localhost:5173
```

The application will communicate with the configured backend API.

---

## 📂 Project Structure

```text
DOCTORZ_FRONTEND/
│
├── frontend/
│   │
│   ├── middleware/
│   │   └── ProtectedRoute.tsx
│   │
│   ├── public/
│   │
│   ├── src/
│   │   │
│   │   ├── api/
│   │   │   └── client.ts
│   │   │
│   │   ├── assets/
│   │   │
│   │   ├── components/
│   │   │   ├── AdminSidebar.tsx
│   │   │   ├── AppointmentFormModal.tsx
│   │   │   ├── BookingDrawer.tsx
│   │   │   ├── ClinicCard.tsx
│   │   │   ├── ClinicSidebar.tsx
│   │   │   ├── DoctorCard.tsx
│   │   │   ├── EditDoctorProfile.tsx
│   │   │   ├── FAQSection.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── JitsiMeetComponent.tsx
│   │   │   ├── Meeting.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── PatientChat.tsx
│   │   │   ├── RightSidebar.tsx
│   │   │   ├── SearchBar.tsx
│   │   │   └── SlidingBanner.tsx
│   │   │
│   │   ├── Context/
│   │   │   └── AuthContext.tsx
│   │   │
│   │   ├── pages/
│   │   │   ├── AdminPages/
│   │   │   ├── ClinicPages/
│   │   │   ├── DoctorPages/
│   │   │   ├── LabPages/
│   │   │   ├── LoginPages/
│   │   │   ├── RegisterPages/
│   │   │   ├── UserPages/
│   │   │   ├── AddDoctor.tsx
│   │   │   ├── AllClinic.tsx
│   │   │   ├── AllClinicPatients.tsx
│   │   │   ├── AllDoctors.tsx
│   │   │   ├── AllLabTests.tsx
│   │   │   ├── AllPatient.tsx
│   │   │   ├── DoctorSearchResults.tsx
│   │   │   ├── Home.tsx
│   │   │   ├── LabProfile.tsx
│   │   │   ├── PackageDetails.tsx
│   │   │   ├── PatientChat.tsx
│   │   │   ├── TimeSlots.tsx
│   │   │   └── ViewDoctorProfile.tsx
│   │   │
│   │   ├── Services/
│   │   │   ├── adminApis.ts
│   │   │   ├── bookingApis.ts
│   │   │   ├── client.ts
│   │   │   ├── doctorApis.ts
│   │   │   ├── emrApis.ts
│   │   │   ├── getLabTests.ts
│   │   │   ├── labApis.ts
│   │   │   ├── mainClinicApis.ts
│   │   │   ├── patientApis.ts
│   │   │   └── ...
│   │   │
│   │   ├── types/
│   │   ├── utils/
│   │   ├── App.css
│   │   ├── App.tsx
│   │   ├── global.d.ts
│   │   ├── index.css
│   │   └── main.tsx
│   │
│   ├── .env
│   ├── index.html
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
│
└── README.md
```

---

## 🔮 Future Improvements

* Enhanced appointment scheduling.
* Improved patient record management.
* Additional online consultation features.
* Enhanced notification management.
* Improved mobile responsiveness.
* Additional healthcare service integrations.

---

## 🌐 Live Links

| Service              | Link                                |
| -------------------- | ----------------------------------- |
| Frontend Application | https://doctorz-fronted.vercel.app/ |
| Backend API          | https://doctorz-main.onrender.com   |

---

## 👥 Team

DoctorZ was developed as a collaborative project by a team of five members.

Each member contributed to different parts of the application, including frontend development, backend functionality, dashboard management, and application integration.

---

## 👩‍💻 Author

**Mitalee Dewangan**

Full Stack Developer | MERN Stack Developer

* GitHub: [Mitalee Dewangan](https://github.com/Mitaleedewangan)

---

## ⭐ Support

If you find this project interesting, consider giving the repository a ⭐ on GitHub!
