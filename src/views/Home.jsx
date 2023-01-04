import React from "react";
import Loader from "../components/Loader";
import BlogCard from "../components/BlogCard";
import { useAxiosGet } from "../hooks/HttpRequests";

const Home = () => {
  const url = `https://63b528d19f50390584c205e4.mockapi.io/blogs?page=1&limit=10`;

  let blogs = useAxiosGet(url);

  let content = null;

  if (blogs.error) {
    content = <p>There war an eror please refresh or try again later.</p>;
  }

  if (blogs.loading) {
    content = <Loader />;
  }

  if (blogs.data) {
    content = blogs.data.map((blogs) => (
      <div className="" key={blogs.id}>
        <BlogCard blog={blogs} />
      </div>
    ));
  }

  return (
    <div className="p-3 flex flex-wrap justify-center gap-4">{content}</div>
  );
};

export default Home;
