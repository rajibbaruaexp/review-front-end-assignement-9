import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="text-center pb-3 pt-3">
        <Container>
          <Row>
            <Col>All rights reserved</Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
