import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupPopup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    dateOfBirth: '',
    address: '',
    contactNumber: '',
    email: ''
  });
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSignup = async () => {
    try {
      await fetch('http://localhost:3001/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, password: 'Change@123' })
      });
      alert('Signup successful! Check your email for login details.');
      navigate('/');
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} />
      <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} />
      <select name="gender" onChange={handleChange}>
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
      <input type="date" name="dateOfBirth" onChange={handleChange} />
      <input type="text" name="address" placeholder="Address" onChange={handleChange} />
      <input type="text" name="contactNumber" placeholder="Contact Number" onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default SignupPopup;
