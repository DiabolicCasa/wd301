import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
    navigate("/signin")
  };

  const user= JSON.parse(localStorage.getItem("userData") || "")
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Dashboard
      </h1>
      <p>
        {
            `${user.name}
            ${user.email}`
        }
      </p>
      <button className="bg-red-500 p-2 rounded-md text-white"
        id="logout-link"
        onClick={() => {
          logOut();
        }}
      >
        Log Out
      </button>
    </div>
  );
};

export default Dashboard;
