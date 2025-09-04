import { Film } from "lucide-react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <NavLink
          to="/"
          className="flex items-center text-yellow-400 text-xl font-bold"
        >
          <Film className="mr-2 w-6 h-6" />
          Gold
        </NavLink>
        
      </div>
    </header>
  );
};

export default Header;
