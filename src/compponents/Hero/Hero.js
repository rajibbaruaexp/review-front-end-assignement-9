import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero-wrapper">
        <Container>
          <Row className="align-items-center">
            <Col>
              <div className="hero-text">
                <h2>
                  <span className="fw-bold">Learn With Rajib</span> is a
                  platform where you can learn your desired programming
                  languages
                </h2>
                <p>
                  At Learn With Rajib, our mission is to continuously innovate
                  the best ways to train the next generation of developers and
                  to transform the the way tech education is delivered. Learn
                  With Rajib was founded in 2016 to bridge the knowledge gap
                  between colleges and industry.
                </p>
              </div>
            </Col>
            <Col className="text-right">
              <form className="quote-form">
                <div className="form-outline">
                  <input
                    type="text"
                    id="form4Example1"
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="form4Example1">
                    Name
                  </label>
                </div>

                <div className="form-outline">
                  <input
                    type="email"
                    id="form4Example2"
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="form4Example2">
                    Email address
                  </label>
                </div>

                <div className="form-outline">
                  <textarea
                    className="form-control"
                    id="form4Example3"
                    rows="4"
                  ></textarea>
                  <label className="form-label" htmlFor="form4Example3">
                    Message
                  </label>
                </div>

                <button type="submit" className="btn btn-primary btn-block">
                  Get A Quote
                </button>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Hero;
