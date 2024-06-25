import React, { useState } from 'react';
import appointmentService from '../services/appointmentService';

const BookAppointmentPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    dob: '',
    age: '',
    appointmentDate: '',
    time: '',
    doctorName: '',
    purposeOfVisit: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await appointmentService.bookAppointment(formData);
      setSuccess('Appointment booked successfully!');
      setError('');
    } catch (err) {
      setError(err.message);
      setSuccess('');
    }
  };

  return (
    <div>
      <h2>Book Appointment</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </label>
        <label>
          Last Name:
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </label>
        <label>
          Gender:
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <label>
          Date of Birth:
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
        </label>
        <label>
          Age:
          <input type="text" name="age" value={formData.age} onChange={handleChange} required />
        </label>
        <label>
          Appointment Date:
          <input type="date" name="appointmentDate" value={formData.appointmentDate} onChange={handleChange} required />
        </label>
        <label>
          Time:
          <input type="time" name="time" value={formData.time} onChange={handleChange} required />
        </label>
        <label>
          Doctor Name:
          <select name="doctorName" value={formData.doctorName} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Doctor 1">Doctor 1</option>
            <option value="Doctor 2">Doctor 2</option>
          </select>
        </label>
        <label>
          Purpose of Visit:
          <textarea name="purposeOfVisit" value={formData.purposeOfVisit} onChange={handleChange} required />
        </label>
        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
};

export default BookAppointmentPage;
