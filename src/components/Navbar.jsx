import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import MenuNavigation from "./MenuNavigation";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import reactIcon from "../images/react.png";

const Navbar = () => {
  const location = useLocation().pathname;
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <nav className="bg-gray-900 border-gray-200 px-4 sm:px-4 py-2.5 w-full">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link to="/" className="flex items-center">
          <img
            src={reactIcon}
            className="h-6 mr-3 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            MyBlog
          </span>
        </Link>
        <ul className="gap-3 hidden md:flex text-white flex-col p-4  md:flex-row md:space-x-8  md:text-sm font-medium rounded-lg bg-gray-800 p-0">
          <li>
            <Link
              className={`text-gray-700 flex w-full py-2 px-6 ${
                location === "/" ? "active bg-gray-700 rounded-lg" : ""
              }`}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`text-gray-700 flex w-full p-2  ${
                location.includes("about")
                  ? "active bg-gray-700 rounded-lg"
                  : ""
              }`}
              to="/about"
            >
              About Me
            </Link>
          </li>
        </ul>
        <span className="text-xl  flex md:hidden">
          <FontAwesomeIcon
            className="hover:text-gray-200 text-gray-500 cursor-pointer hover:bg-gray-800 px-2 py-1 rounded"
            icon={faBars}
            onClick={() => setShowNavbar(!showNavbar)}
          />
          <MenuNavigation
            onCloseMenu={() => setShowNavbar(false)}
            onOpenMenu={showNavbar}
          />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
