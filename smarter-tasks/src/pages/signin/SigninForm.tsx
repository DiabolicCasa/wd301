import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { API_ENDPOINT } from '../../config/constants';

interface SigninFormInputs {
  email: string;
  password: string;
}

const SigninForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<SigninFormInputs>();
  const navigate = useNavigate();
  localStorage.setItem("authenticated", "false");

  const handleSignin: SubmitHandler<SigninFormInputs> = async (data) => {
    try {
      const response = await fetch(`${API_ENDPOINT}/users/sign_in`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Sign-in failed');
      }

      console.log('Sign-in successful');
      const res = await response.json();
      localStorage.setItem('authToken', res.token);
      localStorage.setItem('userData', JSON.stringify(res.user));
      navigate("/account");
    } catch (error) {
      console.error('Sign-in failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleSignin)}>
      <div className="mb-6">
        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
          placeholder="Enter your email"
          className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />
        {errors.email && <p className="text-red-500 text-xs mt-2">{errors.email.message}</p>}
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } })}
          placeholder="Enter your password"
          className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />
        {errors.password && <p className="text-red-500 text-xs mt-2">{errors.password.message}</p>}
      </div>
      <div className="mt-8">
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 transition duration-200"
        >
          Sign In
        </button>
      </div>
      <div className="mt-6 text-center">
        <p className="text-gray-600">
          Don't have an account?{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </form>
  );
};

export default SigninForm;
