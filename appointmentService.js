const getAppointments = async () => {
    try {
      const response = await fetch('/api/appointments', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error fetching appointments');
      }
  
      const appointmentsData = await response.json();
      return appointmentsData;
    } catch (error) {
      console.error('Error fetching appointments:', error);
      throw new Error(error.message);
    }
  };
  
  const bookAppointment = async (appointmentData) => {
    try {
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(appointmentData),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error booking appointment');
      }
  
      const bookedAppointment = await response.json();
      return bookedAppointment;
    } catch (error) {
      console.error('Error booking appointment:', error);
      throw new Error(error.message);
    }
  };
  
  const appointmentService = {
    getAppointments,
    bookAppointment,
  };
  
  export default appointmentService;
  