import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import "./NotFound.css";

const NotFound = () => {
  return (
    <>
      <Container className="pt-5 pb-5">
        <Row>
          <Col>
            <div className="error-template">
              <h1>Oops!</h1>
              <h2>404 Not Found</h2>
              <div className="error-details">
                Sorry, an error has occured, Requested page not found!
              </div>
              <div className="error-actions">
                <NavLink to="/" className="btn btn-primary btn-lg">
                  <span className="glyphicon glyphicon-home"></span>
                  Take Me Home{" "}
                </NavLink>
                <NavLink to="/" className="btn btn-default btn-lg">
                  <span className="glyphicon glyphicon-envelope"></span> Contact
                  Support{" "}
                </NavLink>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NotFound;
