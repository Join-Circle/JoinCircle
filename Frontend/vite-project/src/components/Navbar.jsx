import Logo from "../images/logo.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-gray-800 bg-black">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse no-underline focus:outline-none focus:ring-0"
        >
          <img src={Logo} className="h-15" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            JoinCircle
          </span>
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center justify-center p-2 w-10 h-10 text-white rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 md:hidden"
          aria-controls="navbar-hamburger"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-hamburger"
        >
          <ul className="flex flex-col md:flex-row items-center gap-4 font-medium bg-black md:bg-transparent mt-4 md:mt-0">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-white hover:bg-gray-800 rounded-sm"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="block py-2 px-3 text-white hover:bg-gray-800 rounded-sm"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="block py-2 px-3 text-white hover:bg-gray-800 rounded-sm"
              >
                SignUp
              </Link>
            </li>
            <li>
              <Link
                to="/support"
                className="block py-2 px-3 text-white hover:bg-gray-800 rounded-sm"
              >
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;