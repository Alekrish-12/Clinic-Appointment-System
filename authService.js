const login = async (email, password) => {
  try {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Invalid username or password');
    }

    const userData = await response.json();
    return userData;
  } catch (error) {
    throw new Error(error.message);
  }
};

const signup = async (userData) => {
  try {
    const response = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error signing up');
    }

    const signupData = await response.json();
    return signupData;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Assign the object to a variable before exporting
const authService = {
  login,
  signup,
};

export default authService;
