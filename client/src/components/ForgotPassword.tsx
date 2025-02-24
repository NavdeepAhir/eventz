import { NavLink } from "react-router-dom";

const ForgotPassword = () => {
  const handleForgotPassword = () => {};

  return (
    <div>
      <h2 className="text-center text-4xl font-bold">Forgot Password!</h2>
      <p className="mt-2 text-center text-sm text-gray-600">
        Enter your email, to get password reset link
      </p>
      <form
        onSubmit={handleForgotPassword}
        className="my-8 flex flex-col items-center justify-center gap-8"
      >
        <div className="w-1/2 gap-8">
          <label htmlFor="email">Enter E-mail Address</label>
          <input
            name="email"
            type="email"
            className="w-full p-2 border-2 border-gray-400 rounded-lg"
            id="email"
            placeholder="E-mail Address"
          />
        </div>
        <button
          type="submit"
          className="w-1/2 py-1 px-6 text-white text-lg bg-primary-dark hover:bg-primary hover:scale-105 rounded-md mb-8"
        >
          Forgot Password
        </button>
      </form>

      <div className="text-center">
        <NavLink to="/login" className="text-blue-400">
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default ForgotPassword;
