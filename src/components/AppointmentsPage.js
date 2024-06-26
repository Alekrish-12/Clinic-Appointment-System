import React, { useState, useEffect } from 'react';
import { fetchAppointments } from '../services/appointmentService';

const AppointmentsPage = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const getAppointments = async () => {
      try {
        const fetchedAppointments = await fetchAppointments();
        setAppointments(fetchedAppointments);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    getAppointments();
  }, []);

  return (
    <div>
      <h2>Appointments</h2>
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
          {appointments.map(appointment => (
            <tr key={appointment.id}>
              <td>{appointment.appointmentDate}</td>
              <td>{appointment.time}</td>
              <td>{appointment.doctorName}</td>
              <td>{appointment.purposeOfVisit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentsPage;
