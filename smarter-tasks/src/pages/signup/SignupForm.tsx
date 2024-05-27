import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { API_ENDPOINT } from '../../config/constants';

interface SignupFormInputs {
  organisationName: string;
  userName: string;
  userEmail: string;
  userPassword: string;
}

const SignupForm: React.FC = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<SignupFormInputs>();
  const navigate = useNavigate();

  const handleSignup: SubmitHandler<SignupFormInputs> = async (data) => {
    try {
      const response = await fetch(`${API_ENDPOINT}/organisations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.organisationName,
          user_name: data.userName,
          email: data.userEmail,
          password: data.userPassword
        }),
      });

      if (!response.ok) {
        throw new Error('Sign-up failed');
      }
      const res = await response.json();
      console.log(res);
      console.log('Sign-up successful');
      localStorage.setItem('authToken', res.token);
      localStorage.setItem('userData', JSON.stringify(res.user));
      navigate("/account");
    } catch (error) {
      console.error('Sign-up failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleSignup)}>
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
          {...register('organisationName', { required: 'Organization name is required' })}
          placeholder="Enter your organization name"
          className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />
        {errors.organisationName && <p className="text-red-500 text-xs mt-2">{errors.organisationName.message}</p>}
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
          {...register('userName', { required: 'Username is required' })}
          placeholder="Enter your username"
          className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />
        {errors.userName && <p className="text-red-500 text-xs mt-2">{errors.userName.message}</p>}
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
          {...register('userEmail', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
          placeholder="Enter your email"
          className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />
        {errors.userEmail && <p className="text-red-500 text-xs mt-2">{errors.userEmail.message}</p>}
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
          {...register('userPassword', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } })}
          placeholder="Enter your password"
          className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />
        {errors.userPassword && <p className="text-red-500 text-xs mt-2">{errors.userPassword.message}</p>}
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
