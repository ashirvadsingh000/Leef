// src/Auth.jsx
import { useState } from 'react';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
function Auth() {
  const [isRegistered, setIsRegistered] = useState(false);
  return (
    <div className="Auth">
      {isRegistered ? <Login /> : <Signup />}
      <div className="text-center">
        <button
          className="text-blue-500 hover:text-pink-500 "
          onClick={() => setIsRegistered(!isRegistered)}
        >
          {isRegistered ? "Don't have an account? Sign Up" : 'Already have an account? Login'}
        </button>
      </div>
    </div>
  );
}

export default Auth;
