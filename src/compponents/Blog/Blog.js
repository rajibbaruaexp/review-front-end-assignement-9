import React from "react";
import { NavLink } from "react-router-dom";

const Blog = (props) => {
  const { name, img, author, details } = props.blog;
  return (
    <div className="col-md-4 mb-5">
      <div className="card">
        <img src={img} alt="" />
        <div className="card-body">
          <h5 className="card-title fw-bold">{name}</h5>
          <p className="card-text">{details.slice(0, 150)}....</p>
          <p>
            <span className="fw-bold">Author</span>: {author}
          </p>
          <NavLink to="/" className="btn btn-primary">
            Read More
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Blog;
