import React, { useState, useEffect } from 'react';

const HomePage = () => {
  const [bookings, setBookings] = useState(0);
  const [nextBooking, setNextBooking] = useState(null);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch('http://localhost:4001/appointments');
        const data = await response.json();
        setBookings(data.length);
        if (data.length > 0) {
          setNextBooking(data[0].appointmentDate);
        }
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };
    fetchAppointments();
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
