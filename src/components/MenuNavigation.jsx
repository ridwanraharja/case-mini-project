import React from "react";
import { useTransition, animated } from "react-spring";
import { Link } from "react-router-dom";
import { faHouse, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";
import reactIcon from "../images/react.png";

const MenuNavigation = (props) => {
  const location = useLocation().pathname;

  // transition setting
  const maskTransitions = useTransition(props.onOpenMenu, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 0.5 },
    leave: { opacity: 0 },
  });

  const menuTransitions = useTransition(props.onOpenMenu, {
    from: { opacity: 0.5, transform: "translateX(-4000%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0, transform: "translateX(-4000%)" },
  });

  // conditional rendering
  let menu;
  let mask;
  if (props.onOpenMenu) {
    menu = menuTransitions((style) => (
      <animated.div
        className="fixed bg-gray-900 top-0 left-0 w-4/5 h-full z-50 shadow p-3"
        style={style}
      >
        <div className="flex items-center p-2 mb-2 bg-gray-800 rounded-2xl">
          <img src={reactIcon} className="h-12 mr-3" alt="React Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            MyBlog
          </span>
        </div>
        <ul className="space-y-2">
          <li>
            <Link
              to="/"
              onClick={props.onCloseMenu}
              className={` flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-700 ${
                location === "/" ? "bg-gray-700" : ""
              }`}
            >
              <FontAwesomeIcon
                icon={faHouse}
                className="w-6 h-6 text-gray-400"
              />
              <span className="ml-3">Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={props.onCloseMenu}
              className={` flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-700 ${
                location.includes("about") ? "bg-gray-700" : ""
              }`}
            >
              <FontAwesomeIcon
                icon={faUser}
                className="w-6 h-6 text-gray-400"
              />
              <span className="ml-3">About Me</span>
            </Link>
          </li>
        </ul>
      </animated.div>
    ));

    mask = maskTransitions((style) => (
      <animated.div
        className="fixed bg-black opacity-50 top-0 left-0 w-full h-full z-40"
        style={style}
        onClick={props.onCloseMenu}
      ></animated.div>
    ));
  }

  return (
    <div>
      {menu}
      {mask}
    </div>
  );
};

export default MenuNavigation;
