import HomePage from './pages/HomePage';
import TaskListPage from './pages/TaskListPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/tasks",
      element: <TaskListPage />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
