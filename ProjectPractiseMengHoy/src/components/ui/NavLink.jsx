import React from "react";
import User from "./User";

function NavLink({ user , isSignOut }) {
  return (
    <ul className="flex items-center gap-6 px-6 py-4 text-black">
      <li>
        <a
          href="/"
          className="rounded-md px-3 py-2 transition-colors hover:bg-gray-200 hover:text-back"
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="/about"
          className="rounded-md px-3 py-2 transition-colors hover:bg-gray-200 hover:text-back"
        >
          Products
        </a>
      </li>
      <li>
        <a
          href="/contact"
          className="rounded-md px-3 py-2 transition-colors hover:bg-gray-200 hover:text-back"
        >
          Services
        </a>
      </li>
      <User user={user} isSignOut={isSignOut} />
    </ul>
  );
}

export default NavLink;
