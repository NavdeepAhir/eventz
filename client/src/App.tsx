import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Todos from "./pages/Todos";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import ForgotPassword from "./components/ForgotPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/",
    element: <Login />,
    children: [
      {
        path: "login",
        element: <LoginForm />,
      },
      {
        path: "signup",
        element: <RegisterForm />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
    ],
  },
  {
    path: "/todo",
    element: (
      <ProtectedRoute>
        <Todos />
      </ProtectedRoute>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
