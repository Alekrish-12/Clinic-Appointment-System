// src/services/appointmentService.js

const BASE_URL = 'http://localhost:4001/appointments';

export const fetchAppointments = async () => {
  try {
    const response = await fetch(BASE_URL);
    const appointments = await response.json();
    return appointments;
  } catch (error) {
    console.error('Error fetching appointments:', error);
    return [];
  }
};

export const bookAppointment = async (appointmentData) => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(appointmentData)
    });
    return response.ok;
  } catch (error) {
    console.error('Error booking appointment:', error);
    return false;
  }
};
