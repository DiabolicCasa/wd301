import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  localStorage.setItem("authenticated", "false");

  function handleSignin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (username === "admin" && password === "admin") {
      localStorage.setItem("authenticated", "true");
      navigate("/home");
    } else {
      alert("Invalid username or password");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-indigo-600">
      <div className="max-w-md w-full px-8 py-10 bg-white rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Sign In
        </h2>
        <form onSubmit={handleSignin}>
          <div className="mb-6">
            <label
              htmlFor="username"
              className="block text-gray-700 font-semibold mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
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
            <p className="text-gray-600">Don't have an account? <a href="#" className="text-blue-500 hover:underline">Sign up</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signin;
