import { Film } from "lucide-react"; // thay FontAwesome
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <NavLink
          to="/"
          className="flex items-center text-yellow-400 text-xl font-bold"
        >
          <Film className="mr-2 w-6 h-6" /> {/* icon thay thế */}
          Gold
        </NavLink>
        <nav className="flex space-x-6">
          <NavLink
            className="nav-link text-white hover:text-yellow-400"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="nav-link text-white hover:text-yellow-400"
            to="/watchList"
          >
            Watch List
          </NavLink>
        </nav>
        <div className="flex space-x-2">
          <button className="border border-cyan-400 text-cyan-400 px-4 py-2 rounded hover:bg-cyan-400 hover:text-white transition">
            Login
          </button>
          <button className="border border-cyan-400 text-cyan-400 px-4 py-2 rounded hover:bg-cyan-400 hover:text-white transition">
            Register
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
