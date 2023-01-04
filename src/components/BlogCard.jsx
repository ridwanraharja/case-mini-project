import React from "react";
import profile from "../images/profile.jpeg";
import { Link } from "react-router-dom";

const BlogCard = (props) => {
  return (
    <Link
      to={`/blog/${props.blog.id}`}
      className="max-w-sm w-full lg:max-w-full lg:flex rounded   "
    >
      <div
        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        style={{ backgroundImage: `url('${props.blog.images[0].imageUrl}')` }}
      ></div>
      <div className=" bg-[#1F2937] p-4 flex flex-col justify-between leading-normal border border-gray-700 rounded">
        <div className="mb-8">
          <div className="text-white font-bold text-2xl mb-2">
            {props.blog.title}
          </div>
          <p className="text-gray-400 text-base">{props.blog.description}</p>
        </div>
        <div className="flex items-center">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src={profile}
            alt="Avatar of Jonathan Reinink"
          />
          <div className="text-sm">
            <p className="text-white leading-none">
              Muhammad Ridwan Ali Raharja
            </p>
            <p className="text-gray-400">Front-End Developer</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
