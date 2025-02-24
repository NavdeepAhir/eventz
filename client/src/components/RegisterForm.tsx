import { FormEvent } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axiosInstance from "../config/axiosInstance";

const RegisterForm = () => {
  const navigate = useNavigate();
  const handleRegistration = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // use FormData to collect all fields
      const formData = new FormData(e.currentTarget);
      // Convert FormData to a plain object
      const data = Object.fromEntries(formData.entries());

      if (data.password !== data.confirmPassword) {
        alert("Password do not match!");
        return;
      }

      const response = await axiosInstance.post("/register", data);

      localStorage.setItem("jwtToken", response.data.token);

      navigate("/todos");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h2 className="text-center text-4xl font-bold ">
        Signup to create an account
      </h2>
      <form
        onSubmit={handleRegistration}
        className="my-8 flex flex-col items-center justify-center gap-4"
      >
        <div className="w-1/2 flex gap-4">
          <div className="w-1/2">
            <label htmlFor="firstName">First Name</label>
            <input
              name="firstName"
              type="text"
              id="firstName"
              className="w-full p-2 border-2 border-gray-400 rounded-lg"
              placeholder="First Name"
            />
          </div>
          <div className="w-1/2">
            <label htmlFor="lastName">Last Name</label>
            <input
              name="lastName"
              type="text"
              id="Last Name"
              className="w-full p-2 border-2 border-gray-400 rounded-lg"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="w-1/2">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            id="email"
            className="w-full p-2 border-2 border-gray-400 rounded-lg"
            placeholder="E-mail Address"
          />
        </div>
        <div className="w-1/2">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            id="password"
            className="w-full p-2 border-2 border-gray-400 rounded-lg"
            placeholder="Password"
          />
        </div>
        <div className="w-1/2">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            name="confirmPassword"
            type="password"
            id="confirmPassword"
            className="w-full p-2 border-2 border-gray-400 rounded-lg"
            placeholder="Confirm Password"
          />
        </div>
        <button
          type="submit"
          className="w-1/2 py-1 px-6 text-white text-lg bg-primary-dark hover:bg-primary hover:scale-105 rounded-md mb-8"
        >
          Sign Up
        </button>
      </form>

      <div className="text-center">
        Already have an account?{" "}
        <NavLink to="/login" className="text-blue-400">
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default RegisterForm;
