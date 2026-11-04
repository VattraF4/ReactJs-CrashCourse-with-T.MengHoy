import NavLink from "./NavLink";
import logo from "../../assets/react.svg";

function NavBar() {
  return (
    <nav className="bg-gray-50 text-black shadow-md">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-3 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
        <img className="h-10 w-auto sm:h-12" src={logo} alt="React Logo" />
        <div className="w-full sm:w-auto">
          <NavLink />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
