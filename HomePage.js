import React, { useEffect, useState } from 'react';
import appointmentService from '../services/appointmentService';

const HomePage = () => {
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const data = await appointmentService.getAppointments();
        setAppointments(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchAppointments();
  }, []);

  return (
    <div>
      <h2>My Appointments</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.id}>
            {appointment.date} - {appointment.time} with {appointment.doctorName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
