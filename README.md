# Clinic-Appointment-System

The Clinic Appointment System is a web application designed to streamline the process of booking and managing clinic appointments for patients and clinic administrators.

#Table of Contents
Features
Technologies Used
Setup Instructions
Usage
Screenshots
Contributing
License

---

## Functionalities Implemented

### User Authentication

- **Signup and Login:**
  - Implemented a signup form for new users with validation.
  - Login functionality to authenticate users based on stored credentials.

- **Email Notification:**
  - Automatically sends an email to newly registered users upon successful signup.
  - The email includes the username (registered email) and a default password (`Change@123`).

### Patient Dashboard

- **Home Page:**
  - Displays summary information after login:
    - Total number of bookings.
    - Next appointment date and details.

### Navigation and Menu

- **Toggle Button Menu:**
  - Displays menu options for easy navigation:
    - Book Appointment: Allows patients to schedule new appointments.
    - My Appointments: Displays a list of current and past appointments.
    - Logout: Logs out the current user from the system.

### Appointment Management

- **Book Appointment:**
  - Allows patients to book appointments with their preferred doctor.
  - Captures details such as appointment date, time, doctor selection, and purpose of visit.

- **My Appointments:**
  - Provides a grid view to patients listing their appointments:
    - Appointment date and time.
    - Doctor's name.
    - Purpose of visit.

### Clinic Staff Features

- **View Appointments:**
  - Clinic staff can view all patient appointments.
  - Includes filters for date and doctor to facilitate appointment management.

### Responsive Design

- **Responsive Layout:**
  - Ensures the application is usable across various devices (desktop, tablet, mobile).
  - Utilizes Bootstrap for responsive styling and layout management.

### Error Handling and Validation

- **Form Validation:**
  - Implements front-end validation for signup and appointment booking forms to ensure data integrity.
  - Displays error messages for invalid inputs to enhance user experience.

### Additional Features

- **Logout Functionality:**
  - Enables users (patients and clinic staff) to log out securely from the system.
  - Clears session data to protect user privacy.

---

To run your Clinic Appointment System, which is a React application with JSON Server serving `userdata.json` and `appointments.json`, follow these steps:

### Prerequisites

Make sure you have Node.js and npm (Node Package Manager) installed on your machine.

### Setup Instructions

1. **Clone the Repository**

   Clone your Clinic Appointment System repository from your Git provider (e.g., GitHub, GitLab):

![Screenshot (101)](https://github.com/Alekrish-12/Clinic-Appointment-System/assets/170092296/f868b1e7-e2ca-4d39-b1a5-b96227fb076c)
   

3. **Install Dependencies**

   Inside the project directory, install the required dependencies using npm: npm install

   ![Screenshot (102)](https://github.com/Alekrish-12/Clinic-Appointment-System/assets/170092296/ffe7736e-d078-44f0-9cfd-ab2cbb87440a)

5. **Start JSON Server**

   You need to start JSON Server for both `userdata.json` and `appointments.json` concurrently. Update your `package.json` with the following scripts:
      "scripts": {
     "start": "concurrently \"json-server --watch public/data/userdata.json --port 3001\" \"json-server --watch public/data/appointments.json --port 3002\"",
     "start:app": "react-scripts start",
     "start:server": "npm run start",
     "build": "react-scripts build",
     "test": "react-scripts test",
     "eject": "react-scripts eject"
   },


6. **Start the Application**

   Run the following command to start both JSON Server instances and the React application: npm start.

   
![Screenshot (105)](https://github.com/Alekrish-12/Clinic-Appointment-System/assets/170092296/0671d2ab-b9a1-4fac-845b-e65927a439aa)

   This command will execute the `start` script defined in `package.json`, which concurrently starts two instances of `json-server` (one for `userdata.json` and one for `appointments.json`) and your React application.

8. **Access the Application**

   Once the application is successfully started, you can access it in your web browser .

### Notes:

- **JSON Server Ports:**
  - `userdata.json` will be served at http://localhost:4000/users
   ![Screenshot (103)](https://github.com/Alekrish-12/Clinic-Appointment-System/assets/170092296/73547861-5a91-4881-8035-e677eeb8e7a9)

  - `appointments.json` will be served at http://localhost:4001/appointments
 
    ![Screenshot (104)](https://github.com/Alekrish-12/Clinic-Appointment-System/assets/170092296/d4032143-002d-4ae9-9a1d-26f5fe21934f)


- **Concurrent Execution:**
  - The `concurrently` package allows running multiple commands concurrently in the same terminal window. It ensures both JSON Server instances and the React application are started together.

- **Development vs Production:**
  - These instructions are tailored for development. For production deployment, you would typically build the React application (`npm run build`) and serve the static files using a web server like Nginx or Apache.

By following these steps, you should be able to run your Clinic Appointment System locally, interact with the application, and utilize the functionalities such as booking appointments, viewing appointments, and managing user profiles effectively. Adjust the setup according to your specific project structure and requirements as needed.

--------------------

#Website login

![login](https://github.com/Alekrish-12/Clinic-Appointment-System/assets/170092296/34c5ef4b-ba01-43ea-920b-218cf9284b81)



![Signup](https://github.com/Alekrish-12/Clinic-Appointment-System/assets/170092296/a8c69db8-f559-4012-b3af-8f7590c3b6b0)



![UserList](https://github.com/Alekrish-12/Clinic-Appointment-System/assets/170092296/ebe03845-9ba6-4680-8e5b-e33b81b74e8c)



![appointment1](https://github.com/Alekrish-12/Clinic-Appointment-System/assets/170092296/f4949190-028c-451d-910c-c6b29ce13eb7)


In conclusion, the Clinic Appointment System is designed to provide a streamlined experience for managing clinic appointments, catering to both patients and clinic staff. This README serves as a guide to understand the setup, functionalities, and usage of the application.

### Key Highlights

- **User Authentication:** Implemented secure login and signup functionalities with email notifications upon registration.
  
- **Appointment Management:** Patients can easily book appointments with their preferred doctors, while clinic staff can manage appointments efficiently through filtering options.

- **Dashboard and Navigation:** The application features a user-friendly dashboard displaying important information such as total bookings and upcoming appointments. Navigation is facilitated through a toggle button menu for intuitive access to different functionalities.

- **Responsive Design:** Utilizes responsive design principles to ensure compatibility across various devices, enhancing accessibility and user experience.

- **Error Handling and Validation:** Incorporates robust error handling and form validation to maintain data integrity and provide seamless interaction.

### Getting Started

To run the Clinic Appointment System locally:
1. Clone the repository and navigate to the project directory.
2. Install dependencies using npm.
3. Start both JSON Server instances (`userdata.json` and `appointments.json`) and the React application concurrently with `npm start`.
4. Access the application via `http://localhost:3000` in your web browser.

### Contributing

Contributions to the Clinic Appointment System are welcome! Fork the repository, make improvements, and submit pull requests for review. Ensure adherence to coding standards, thorough testing, and documentation updates as necessary.

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.


Thank you for using and contributing to the Clinic Appointment System!






