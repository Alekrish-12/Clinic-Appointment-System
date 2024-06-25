import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import BookAppointmentPage from './components/BookAppointmentPage';
import './App.css'; // You can import CSS for styling here

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Clinic Appointment System</h1>
          <nav>
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/book-appointment">Book Appointment</Link></li>
              {/* Add more navigation links as needed */}
            </ul>
          </nav>
        </header>
        <main className="App-main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/book-appointment" element={<BookAppointmentPage />} />
            {/* Add more routes as needed */}
          </Routes>
        </main>
        <footer className="App-footer">
          <p>&copy; {new Date().getFullYear()} Clinic Appointment System. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
