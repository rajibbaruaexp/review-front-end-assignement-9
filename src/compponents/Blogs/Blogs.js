import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Blog from "../Blog/Blog";
import "./Blogs.css";
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("./blogdb.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <>
      <Container>
        <Row>
          <h1 className="text-center pt-5 pb-5">Our Recent News</h1>
          {blogs.map((blog) => {
            return <Blog key={blog.id} blog={blog}></Blog>;
          })}
        </Row>
      </Container>
    </>
  );
};

export default Blogs;
