// src/components/Authentication.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, register } from '../../features/auth/authSlice';

function Authentication({ onClose }) {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.auth);
  const [isOpen, setIsOpen] = useState(true);
  const [isRegister, setIsRegister] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');

  const toggleMode = () => {
    setIsRegister(!isRegister);
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setUsername('');
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    dispatch(register({ username, email, password }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center transition-opacity ${
        isOpen ? 'bg-white bg-opacity-60' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="bg-gray-300 border-2">
        <div className="grid grid-cols-2 h-[4rem] text-center">
          <div
            className={`${
              !isRegister ? 'bg-titlisRed text-white' : 'bg-white text-black'
            } text-2xl flex items-center justify-center cursor-pointer`}
           onClick={toggleMode}
          >
            Login
          </div>
          <div
            className={`${
              isRegister ? 'bg-titlisRed text-white' : 'bg-white text-black'
            } text-2xl flex items-center justify-center cursor-pointer`}
            onClick={toggleMode}
          >
            Register
          </div>
        </div>
        <div className="m-10">
          <form onSubmit={isRegister ? handleSignup : handleLogin}>
            {isRegister && (
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full focus:outline-none p-2"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            )}
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full focus:outline-none p-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                className="w-full focus:outline-none p-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {isRegister && (
              <div className="mb-4">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full focus:outline-none p-2"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            )}
            {!isRegister && (
              <div className="h-10 text-center justify-center">Forgot Password?</div>
            )}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-titlisRed text-white px-10 text-2xl hover:bg-red-600"
              >
                {isRegister ? 'Register' : 'Login'}
              </button>
            </div>
          </form>
          {status === 'failed' && <div className="mt-4 text-center text-red-600">{error}</div>}
        </div>
        <div className="flex justify-center items-center">
          <button
            className="text-gray-600 hover:text-gray-900 cursor-pointer"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Authentication;
