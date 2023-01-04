import React from "react";
import { Link } from "react-router-dom";
import profile from "../images/profile.jpeg";

const BlogContent = (props) => {
  return (
    <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-gray-900">
      <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
        <article className="mx-auto w-full max-w-2xl">
          <header className="mb-4 lg:mb-6">
            <address className="flex items-center mb-6 not-italic">
              <div className="inline-flex items-center mr-3 text-sm text-white">
                <img
                  className="mr-4 w-16 h-16 rounded-full"
                  src={profile}
                  alt="Muhammad Ridwan Ali Raharja"
                />
                <div>
                  <Link to="/about" className="text-xl font-bold text-white">
                    Muhammad Ridwan Ali Raharja
                  </Link>
                  <p className="text-base font-light text-gray-400">
                    Front-End Developer
                  </p>
                  <p className="text-base font-light text-gray-400">
                    August 8, 2022
                  </p>
                </div>
              </div>
            </address>
            <h1 className="mb-4 text-3xl font-extrabold leading-tight lg:mb-6 lg:text-4xl text-white">
              {props.blog.title}
            </h1>
          </header>
          <p className="text-gray-400">{props.blog.description}</p>
          <figure className="text-center my-5">
            <img src={props.blog.images[0].imageUrl} alt={props.blog.title} />
            <figcaption className="text-gray-400 text-sm mt-2">
              {props.blog.title}
            </figcaption>
          </figure>
          <p className="text-gray-400 mb-5">{props.blog.description}</p>
          <p className="text-gray-400 mb-5">{props.blog.description}</p>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg lg:text-2xl font-bold text-white">
              Discussion (0)
            </h2>
          </div>
          <form className="mb-6">
            <div className="py-2 px-4 mb-4 rounded-lg rounded-t-lg border bg-gray-800 border-gray-700">
              <label className="sr-only">Your comment</label>
              <textarea
                rows="6"
                className="px-0 w-full text-sm border-0 text-white placeholder-gray-400 bg-gray-800"
                placeholder="Write a comment..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="inline-flex items-center py-2.5 px-4 text-xs font-medium bg-[#1d4ed8] text-center text-white rounded-lg focus:ring-4 focus:ring-[#1e3a8a] hover:bg-[#1e40af]"
            >
              Post comment
            </button>
          </form>
        </article>
      </div>
    </main>
  );
};

export default BlogContent;
