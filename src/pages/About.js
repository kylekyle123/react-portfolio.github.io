import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Style.css";

// Ensure 'profile' is defined or imported correctly
import profile from "../images/graduate_1123.png";

function About() {
  return (
    <Container className="px-8 mx-5">
      <section className="px-5 mx-4">
        <Container className="box">
          <Row className="g-4">
            <Col className="mx-4">
              <Card className="border-0 mt- pt-">
                <Card.Body className="">
                  <Card.Title className="mt-">
                    <p className="text-muted fs-1 fw-light">
                      <b className="text-black fw-bold">
                        Hi I'm Kyle C. Jalapa
                      </b>{" "}
                      - IT Graduate
                    </p>
                    <p className="fw-light fs-5 text-justify">
                      <br />{" "}
                      <p>
                        Dedicated and enthusiastic IT student with a passion for
                        technology and a strong foundation in computer science
                        principles. Currently pursuing a Bachelor's degree in
                        Information Technology at Central Philippines State
                        University, with hands-on experience in making websites
                        and systems. Skilled in problem-solving and debugging,
                        with a knack for understanding complex systems and
                        finding innovative solutions. Eager to apply my academic
                        knowledge and practical skills in a dynamic IT
                        environment, contributing to meaningful projects while
                        further developing my technical expertise. Seeking to
                        leverage my education and internship experiences to make
                        a positive impact in the field of IT.
                      </p>
                    </p>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col className="px-0 mt-0">
              <Card className="border-0 mt-0">
                <Card.Body>
                  <img
                    src={profile}
                    className="w-90 border rounded-5"
                    alt="Kyle Jalapa"
                  />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <Container className="px-4">
        <div className="container border-top mt-5"></div>
      </Container>
    </Container>
  );
}

export default About;
