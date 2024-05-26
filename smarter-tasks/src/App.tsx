import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
// import HomePage from "./pages/HomePage";
// import TaskListPage from "./pages/TaskListPage";
// import TaskDetailsPage from "./pages/TaskDetailsPage";
import ProtectedRoute from "./ProtectedRoute";
// import Layout from "./Layout";
import NotFound from "./pages/Notfound";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import Dashboard from "./pages/dashboard";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/notfound",
    element: <NotFound />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "*",
    element: <Navigate to="/notfound" replace/>,
  }
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;