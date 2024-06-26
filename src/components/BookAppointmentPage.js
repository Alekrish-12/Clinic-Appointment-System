import React, { useState } from 'react';
import { bookAppointment } from '../services/appointmentService';

const BookAppointmentPage = () => {
  const [appointmentData, setAppointmentData] = useState({
    appointmentDate: '',
    time: '',
    doctorName: '',
    purposeOfVisit: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setAppointmentData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleBookAppointment = async () => {
    const success = await bookAppointment(appointmentData);
    if (success) {
      alert('Appointment booked successfully!');
    } else {
      alert('Failed to book appointment');
    }
  };

  return (
    <div>
      <h2>Book Appointment</h2>
      <input type="date" name="appointmentDate" onChange={handleChange} />
      <input type="time" name="time" onChange={handleChange} />
      <select name="doctorName" onChange={handleChange}>
        <option value="">Select Doctor</option>
        <option value="Doctor 1">Doctor 1</option>
        <option value="Doctor 2">Doctor 2</option>
      </select>
      <input type="text" name="purposeOfVisit" placeholder="Purpose of Visit" onChange={handleChange} />
      <button onClick={handleBookAppointment}>Book Appointment</button>
    </div>
  );
};

export default BookAppointmentPage;
