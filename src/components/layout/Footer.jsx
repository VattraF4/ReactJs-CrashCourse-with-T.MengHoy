import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">My Company</h2>
          <p className="mt-2 max-w-md text-sm leading-6">
            Building simple, meaningful experiences for everyone.
          </p>
        </div>

        <nav
          className="flex flex-wrap gap-x-6 gap-y-3 text-sm"
          aria-label="Footer navigation"
        >
          <a href="/" className="transition-colors hover:text-white">
            Home
          </a>
          <a href="#about" className="transition-colors hover:text-white">
            About
          </a>
          <a href="#contact" className="transition-colors hover:text-white">
            Contact
          </a>
        </nav>
      </div>

      <div className="flex items-center justify-center border-t border-gray-800">
        <p className="mx-auto max-w-7xl px-6 py-4 text-center text-sm text-gray-400 sm:px-8 lg:text-left">
          &copy; {new Date().getFullYear()} My Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
