import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-9xl font-bold text-gray-800 mb-8">404</h1>
        <p className="text-2xl font-semibold text-gray-600 mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <button
          id="backToHomeButton"
          onClick={() => navigate("/home")}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default NotFound;