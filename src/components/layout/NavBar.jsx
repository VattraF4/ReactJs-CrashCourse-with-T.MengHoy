import { Link } from "react-router-dom";
import logo from "../../assets/profile1.webp";

function NavBar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-white/10 bg-slate-950/95 px-6 py-4 text-slate-100 shadow-lg backdrop-blur sm:px-10">
      <img
        src={logo}
        alt="logo"
        className="h-12 w-12 rounded-full object-cover"
      />
      <ul className="flex items-center gap-6">
        <Link to="/">
          <li className="cursor-pointer font-medium transition-colors hover:text-blue-600">
            Home
          </li>
        </Link>
        <Link to="/services">
          <li className="cursor-pointer font-medium transition-colors hover:text-blue-600">
            Services
          </li>
        </Link>
        <Link to="/about">
          <li className="cursor-pointer font-medium transition-colors hover:text-blue-600">
            About
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;
