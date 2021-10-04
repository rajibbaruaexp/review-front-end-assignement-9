import React from "react";
import { Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Service = (props) => {
  const { name, img, duration, instructor, fee, details } = props.service;

  return (
    <Col>
      <div className="card mb-3">
        <img src={img} className="card-img-to" alt="" />
        <div className="card-body">
          <h5 className="card-title fw-bold">{name}</h5>
          <p className="card-text">{details.slice(0, 150)}....</p>
          <p>
            <span className="fw-bold">Duration</span>: {duration}
          </p>
          <p>
            <span className="fw-bold">Instructor</span>: {instructor}
          </p>
          <p>
            <span className="fw-bold">Fee</span>: {fee}
          </p>
          <NavLink to="#" className="btn btn-primary">
            Enroll Now
          </NavLink>
        </div>
      </div>
    </Col>
  );
};

export default Service;
