import React, { useState } from "react";
import TSMElogo from "../assets/TSMElogo.png";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

// Button component
function Button({ value }) {
  return (
    <button 
      type="submit"
      className="mt-6 transition-all block py-3 px-4 w-full text-white font-bold rounded cursor-pointer bg-gradient-to-r from-sky-600 to-purple-400 hover:from-indigo-700 hover:to-indigo-600 focus:bg-blue-600 transform hover:-translate-y-1 hover:shadow-lg">
      {value}
    </button>
  );
}

// Input component
function Input({ type, id, name, label, placeholder, autofocus, onChange }) {
  return (
    <label className="text-gray-500 block mt-3">
      {label}
      <input
        autoFocus={autofocus}
        type={type} 
        id={id} 
        name={name} 
        placeholder={placeholder}
        className="rounded px-4 py-3 w-full mt-1 bg-white text-gray-900 border border-gray-200 focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-100"
        onChange={onChange}
      />
    </label>
  );
}

// handleClick function for SweetAlert
const handleClick = (message, type = 'success') => {
  Swal.fire({
    title: type === 'success' ? 'Success' : 'Error',
    text: message,
    icon: type,
  });
};

// LoginForm component
function LoginForm({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Use navigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(`Logging in with email: ${email}, password: ${password}`);

    try {
      const response = await fetch(`http://localhost:3001/users?email=${email}&password=${password}`);
      const users = await response.json();

      if (users.length > 0) {
        handleClick('Logged in successfully');
        onLogin(users[0]);
        navigate('/home'); // Navigate to home page
      } else {
        handleClick('Invalid email or password', 'error');
      }
    } catch (error) {
      console.error('Error during login:', error);
      handleClick('Something went wrong. Please try again later.', 'error');
    }
  };

  return (
    <div className="bg-gray-200 flex justify-center items-center h-screen w-screen">
      <div className="border-t-8 rounded-sm border-indigo-600 bg-white p-12 shadow-2xl w-96">
        <h1 className="font-bold text-center block text-2xl">Log In</h1>
        <form onSubmit={handleSubmit}>
          <Input type="email" id="email" name="email" label="Email Address" placeholder="anas.deep@tsmesolutions.com" autofocus={true} onChange={(e) => setEmail(e.target.value)} />
          <Input type="password" id="password" name="password" label="Password" placeholder="••••••••••" onChange={(e) => setPassword(e.target.value)} />
          <Button value="Log IN" />
        </form>
      </div>
    </div>
  );
}

// LoginPage component
function LoginPage(users) {
  const [user, setUser] = useState(null);

  const handleLogin = (user) => {
    setUser(user);
    console.log('User logged in:', user);
  };

  return (
    <div className="App">
      <img className='w-30 h-24 justify-center flex flex-row top-100 top-4 md:top-6 md:absolute ml-2 ' src={TSMElogo} alt="Logo" />
      <LoginForm onLogin={handleLogin} />
    </div>
  );
}

export default LoginPage;
