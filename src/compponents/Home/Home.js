import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Hero from "../Hero/Hero";
import Service from "../Service/Service";

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <Hero></Hero>
      <Container className="pt-5 pb-5">
        <Row>
          <h1 className="text-center pb-5">Our Featured Services</h1>
          {services.slice(0, 4).map((service) => {
            return <Service key={service.id} service={service}></Service>;
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
