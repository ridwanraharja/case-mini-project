import React from "react";
import Loader from "../components/Loader";
import { useParams } from "react-router-dom";
import { useAxiosGet } from "../hooks/HttpRequests";
import BlogContent from "../components/BlogContent";

const Blog = () => {
  const { id } = useParams();
  const url = `https://63b528d19f50390584c205e4.mockapi.io/blogs/${id}`;

  let blog = useAxiosGet(url);

  let content = null;

  if (blog.error) {
    content = <p>There war an eror please refresh or try again later.</p>;
  }

  if (blog.loading) {
    content = <Loader />;
  }

  if (blog.data) {
    content = <BlogContent blog={blog.data} />;
  }

  return <div>{content}</div>;
};

export default Blog;
