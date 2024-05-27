import { createBrowserRouter, Navigate } from "react-router-dom";

import Signin from "../pages/signin";
import Signup from "../pages/signup";
import AccountLayout from "../layouts/account";
import ProtectedRoute from "./ProtectedRoutes";
import Projects from "../pages/projects";

import Logout from "../pages/logout";
import Members from "../pages/members";
const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/account/projects" replace /> },

  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
  // Protected Routes
  {
    path: "account",
    element: (
      <ProtectedRoute>
        <AccountLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Navigate to="/account/projects" replace /> },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "members",
        element: <Members />,
      },
    ],
  },
]);
export default router;
