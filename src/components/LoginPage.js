import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SignupPopup from './components/SignupPopup';
import HomePage from './components/HomePage';
import BookAppointmentPage from './components/BookAppointmentPage';
import AppointmentsPage from './components/AppointmentsPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPopup />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/book-appointment" element={<BookAppointmentPage />} />
      <Route path="/appointments" element={<AppointmentsPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </Router>
);

export default App;
