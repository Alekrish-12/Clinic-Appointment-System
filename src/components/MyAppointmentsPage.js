import React, { useState, useEffect } from 'react';

const MyAppointmentsPage = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Fetch appointments from the server or local data
    setAppointments([
      {
        id: 1,
        date: '2023-01-01',
        time: '10:00 AM',
        doctor: 'Doctor 1',
        purpose: 'General Checkup'
      },
      // Add more appointments as needed
    ]);
  }, []);

  return (
    <div>
      <h2>My Appointments</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Doctor</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id}>
              <td>{appointment.date}</td>
              <td>{appointment.time}</td>
              <td>{appointment.doctor}</td>
              <td>{appointment.purpose}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyAppointmentsPage;
