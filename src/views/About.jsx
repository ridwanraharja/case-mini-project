import React from "react";
import profile from "../images/profile.jpeg";

const About = () => {
  return (
    <div className="bg-gray-900 antialiased">
      <div className="container mx-auto my-20">
        <div>
          <div className="bg-white relative shadow rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto">
            <div className="flex justify-center">
              <img
                src={profile}
                alt="profile"
                className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"
              />
            </div>

            <div className="mt-16">
              <h1 className="font-bold text-center text-3xl text-gray-900">
                Muhammad Ridwan Ali Raharja
              </h1>
              <p className="text-center text-sm text-gray-400 font-medium">
                Front-End Developer
              </p>
              <p>
                <span></span>
              </p>
              <div className="my-5 px-6">
                <a
                  href="https://www.instagram.com/ridwanraharja/"
                  className="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white"
                >
                  Connect with <span className="font-bold">@ridwanraharja</span>
                </a>
              </div>
              <div className="flex justify-between items-center my-5 px-6">
                <a
                  href="https://www.linkedin.com/in/ridwanraharja/"
                  className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"
                >
                  LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/ridwanraharja/"
                  className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"
                >
                  Instagram
                </a>
                <a
                  href="https://twitter.com/ambisiwann"
                  className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"
                >
                  Twitter
                </a>
                <a
                  href="mailto:ridwanraharja17@gmail.com"
                  className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"
                >
                  Email
                </a>
              </div>

              <div className="w-full">
                <h3 className="font-medium text-gray-900 text-left px-6">
                  Recent activites
                </h3>
                <div className="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
                  <div className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                    <img
                      src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                      alt=""
                      className="rounded-full h-6 shadow-md inline-block mr-2"
                    />
                    Front-End Developer | PT. Kawan Kerja Indonesia
                    <span className="text-gray-500 text-xs">
                      &nbsp; 24 min ago
                    </span>
                  </div>
                  <div className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                    <img
                      src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                      alt=""
                      className="rounded-full h-6 shadow-md inline-block mr-2"
                    />
                    Web Developer Developer | TedxUINJakarta
                    <span className="text-gray-500 text-xs">
                      &nbsp; 24 min ago
                    </span>
                  </div>

                  <div className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                    <img
                      src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                      alt=""
                      className="rounded-full h-6 shadow-md inline-block mr-2"
                    />
                    Back-End Developer | Mini Club Developer Community
                    <span className="text-gray-500 text-xs">
                      &nbsp; 24 min ago
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
