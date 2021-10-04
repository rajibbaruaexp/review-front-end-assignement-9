import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import "./HeaderTop.css";

const HeaderTop = () => {
  const emailIcon = <FontAwesomeIcon icon={faEnvelope} />;
  const fbIcon = <FontAwesomeIcon icon={faFacebook} />;
  const faGithubIcon = <FontAwesomeIcon icon={faGithub} />;
  const faLinkedinIcon = <FontAwesomeIcon icon={faLinkedin} />;
  return (
    <div className="header-top">
      <Container>
        <Row>
          <Col className="text-start d-flex align-items-center">
            {emailIcon}{" "}
            <p>
              <a href="mailto:rajibbaruaexp@gmail.com">
                contact@learnwithrajib.com
              </a>
            </p>
          </Col>
          <Col className="text-end">
            <a
              href="https://www.facebook.com/rajibbaruaexp"
              target="_blank"
              rel="noopener noreferrer"
            >
              {fbIcon}
            </a>
            <a
              href="https://github.com/rajibbaruaexp"
              target="_blank"
              rel="noopener noreferrer"
            >
              {faGithubIcon}{" "}
            </a>
            <a
              href="https://www.linkedin.com/in/rajibbaruaexp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {faLinkedinIcon}
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeaderTop;
