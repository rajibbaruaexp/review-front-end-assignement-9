import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import "./HeaderBottom.css";

const HeaderBottom = () => {
  return (
    <div className="header-bottom">
      <Container>
        <Row>
          <Col>
            <div className="logo-wrapper">
              <NavLink to="/">
                <span>L</span>
                <span>W</span>
                <span>R</span>
              </NavLink>
            </div>
          </Col>
          <Col>
            <nav className="navbar navbar-expand-lg navbar-light justify-content-end">
              <div className="text-end">
                <button
                  className="navbar-toggler bg-light"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse justify-content-end"
                  id="navbarSupportedContent"
                >
                  <ul className=" navbar-nav mb-2 mb-lg-0">
                    <li className="nav-item">
                      {" "}
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                      {" "}
                      <NavLink to="/about">About Us</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/services">Services</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/blogs">Blogs</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeaderBottom;
