import React from "react";
import { Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <div>
      <Container>
        <Row>
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <h1 className="m-5">
              <span className="fw-bold">About</span> "Learn With Rajib"
            </h1>
            <p>
              Hi! I am Rajib barua! I am a passionate and pragmatic software
              engineer with 20 years of professional experience and I've taught
              over 10 million people how to code or how to become professional
              software engineers through my YouTube channel and online courses.
              I have a Bachelor of Science in Software Engineering and a Master
              of Science in Networks Systems. <br /> My mission is to make
              coding and software engineering accessible to everyone through
              courses that are simple to digest, and practical to implement.
            </p>

            <h1 className="m-5">Our Story</h1>
            <p>
              At Learn With Rajib, our mission is to continuously innovate the
              best ways to train the next generation of developers and to
              transform the the way tech education is delivered. <br /> Learn
              With Rajib was founded in 2016 to bridge the knowledge gap between
              colleges and industry. Founded by Ankush Singla, Kannu Mittal and
              Dhawal Parate, Coding Ninjas boasts of world-class teaching
              faculty and a state-of-art learning platform for Coding education
              with faculty alumni of IIT, Stanford, IIIT and Facebook. Learn
              With Rajib teaches 17+ Programming courses in Foundation,l
              Advanced, Data & Development courses such as Machine Learning,
              Data Science, Web Development, Android and more. Today, Learn With
              Rajib ecosystem comprises of 40,000+ students and alumni, 1000+
              Campus Ambassadors, 2000+ Teaching Assistants, and 150+ employees.
            </p>
          </div>
          <div className="col-md-3"></div>
        </Row>
      </Container>
    </div>
  );
};

export default About;
