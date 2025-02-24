import { NavLink, useNavigate } from "react-router-dom";
import axiosInstance from "../config/axiosInstance";

const LoginForm = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event: any) => {
    try {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const data = Object.fromEntries(formData.entries());

      const response = await axiosInstance.post("/login", data);
      localStorage.setItem("jwtToken", response.data.token);

      navigate("/todo");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h2 className="text-center text-4xl font-bold">Welcome Back</h2>
      <p className="mt-2 text-center text-sm text-gray-600">
        Enter your email and password to access your account
      </p>
      <form
        onSubmit={handleSubmit}
        className="my-8 flex flex-col items-center justify-center gap-8"
      >
        <div className="w-1/2 gap-8">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            className="w-full p-2 border-2 border-gray-400 rounded-lg"
            id="email"
            placeholder="E-mail Address"
          />
        </div>
        <div className="w-1/2 gap-2">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            id="password"
            className="w-full p-2 border-2 border-gray-400 rounded-lg"
            placeholder="Password"
          />
        </div>

        <div className="w-1/2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="rememberMe"
              id="rememberMe"
              className="w-4 h-4"
            />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          <NavLink to="/forgot-password" className="hover:text-gray-700">
            Forgot Password
          </NavLink>
        </div>
        <button
          type="submit"
          className="w-1/2 py-1 px-6 text-white text-lg bg-primary-dark hover:bg-primary hover:scale-105 rounded-md mb-8"
        >
          Sign In
        </button>
      </form>

      <div className="text-center">
        Don't have an account yet?{" "}
        <NavLink to="/signup" className="text-blue-400">
          Signup
        </NavLink>
      </div>
    </div>
  );
};

export default LoginForm;
