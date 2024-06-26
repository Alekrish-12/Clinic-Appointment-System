import React, { useState, useEffect } from 'react';
import { fetchAppointments } from '../services/appointmentService';

const HomePage = () => {
  const [bookings, setBookings] = useState(0);
  const [nextBooking, setNextBooking] = useState(null);

  useEffect(() => {
    const fetchAndSetAppointments = async () => {
      const appointments = await fetchAppointments();
      setBookings(appointments.length);
      if (appointments.length > 0) {
        setNextBooking(appointments[0].appointmentDate);
      }
    };
    fetchAndSetAppointments();
  }, []);

  return (
    <div>
      <h2>Home</h2>
      <p>Total number of Bookings: {bookings}</p>
      {nextBooking && <p>Next Booking Date: {nextBooking}</p>}
    </div>
  );
};

export default HomePage;
