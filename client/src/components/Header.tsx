import { NavLink } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

function Header() {
  return (
    <nav className="bg-secondary dark:bg-black shadow-md dark:shadow-[0px_4px_6px_rgba(255,255,255,0.2)] flex justify-between items-center px-6">
      <h2 className="font-bold text-4xl p-4 font-meow text-primary-dark dark:text-white">
        Eventz
      </h2>

      <div className="flex gap-2">
        <DarkModeToggle />
        <NavLink
          to="/signup"
          className="bg-gray-200 hover:bg-gray-600 hover:text-white px-4 py-2 rounded-full"
        >
          SignUp
        </NavLink>
        <NavLink
          to="/login"
          className="bg-pink-200 hover:bg-pink-600 hover:text-white px-4 py-2 rounded-full"
        >
          Login
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;
