import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="p-4 shadow md:flex md:items-center md:justify-between md:p-6 bg-gray-800 absolute bottom-0 w-full">
      <span className="flex justify-center text-sm sm:text-center text-gray-400">
        ©2022
        <span>&nbsp;Muhammad Ridwan Ali Raharja</span>
      </span>
      <ul className="flex flex-wrap justify-center items-center mt-3 text-sm  text-gray-400 md:mt-0">
        <li>
          <Link to="/about" className="mr-4 hover:underline md:mr-6 ">
            About
          </Link>
        </li>
        <li>
          <button className="mr-4 hover:underline md:mr-6">
            Privacy Policy
          </button>
        </li>
        <li>
          <button className="mr-4 hover:underline md:mr-6">Licensing</button>
        </li>
        <li>
          <button className="hover:underline">Contact</button>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
