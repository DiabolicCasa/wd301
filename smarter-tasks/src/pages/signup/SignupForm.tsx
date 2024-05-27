import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_ENDPOINT } from '../../config/constants';

const SignupForm: React.FC = () => {

    const navigate = useNavigate();
  

    const [organisationName, setOrganisationName] = useState("");
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    
    const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

    try {
      const response = await fetch(`${API_ENDPOINT}/organisations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: organisationName, user_name: userName, email: userEmail, password: userPassword}),
      });

      if (!response.ok) {
       
        throw new Error('Sign-up failed');
      }
      const res = await response.json()
      console.log(res);
      console.log('Sign-up successful');
      localStorage.setItem('authToken', res.token);
      localStorage.setItem('userData', JSON.stringify(res.user));
      navigate("/account")
    } catch (error) {
      console.error('Sign-up failed:', error);
    }
    //   navigate("/account");
    }

    return(
        <form onSubmit={handleSignup}>
        <div className="mb-6">
          <label
            htmlFor="organisationName"
            className="block text-gray-700 font-semibold mb-2"
          >
            Organization Name
          </label>
          <input
            type="text"
            id="organisationName"
            name="organisationName"
            value={organisationName}
            onChange={(e) => setOrganisationName(e.target.value)}
            placeholder="Enter your organization name"
            className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="userName"
            className="block text-gray-700 font-semibold mb-2"
          >
            Username
          </label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter your username"
            className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="userEmail"
            className="block text-gray-700 font-semibold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="userEmail"
            name="userEmail"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="userPassword"
            className="block text-gray-700 font-semibold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="userPassword"
            name="userPassword"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>
        <div className="mt-8">
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 transition duration-200"
          >
            Sign Up
          </button>
        </div>
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Already have an account?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Sign in
            </a>
          </p>
        </div>
      </form>
    );

}

export default SignupForm;