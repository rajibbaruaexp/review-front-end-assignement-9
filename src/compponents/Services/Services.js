import React from "react";
import { Container, Row } from "react-bootstrap";
import useServices from "../../hooks/useServices";
import Service from "../Service/Service";

const Services = () => {
  const [services] = useServices();

  return (
    <Container className="pt-5 pb-5">
      <Row>
        <h1 className="text-center pb-5">Our Featured Services</h1>
        {services.map((service) => {
          return <Service key={service.id} service={service}></Service>;
        })}
      </Row>
    </Container>
  );
};

export default Services;
