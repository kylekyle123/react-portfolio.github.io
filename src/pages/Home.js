import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import profile from "../images/123PROFILE.png";
import website from "../images/website.jpg";
import capstone from "../images/capstone.jpg";
import portfolio from "../images/portfolio.png";
import "./Style.css";

function Home() {
  return (
    <Container fluid id="home">
      <section className="px-5 mx-4">
        <Container className="box">
          <Row className="g-4">
            <Col className="mx-4">
              <Card className="border-0 mt-5 pt-5">
                <Card.Body className="mt-5">
                  <Card.Title className="mt-5">
                    <p className="text-muted fs-1 fw-light">
                      <b className="text-black fw-bold">Kyle C. Jalapa</b>- IT
                      Graduate
                    </p>
                    <p className="fw-light fs-4 text-justify">
                      <br /> "Empowering the Future with Technology"
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

      <section>
        <Container fluid id="projects">
          <div className="container px-5 pt-5 box">
            <Row>
              <Col>
                <h1 className="fs-1 bold-600 fw-bold mt-auto">
                  <i>RECENT PROJECTS</i>
                </h1>
              </Col>
            </Row>
            <Row className="gap-2">
              <Col className="col-12 bg-dark mt-4 overflow-hidden position-relative">
                <a href="no link" target="_blank" rel="noreferrer">
                  <div className="p-5 position-absolute top-25 start-25">
                    <h3 className="text-white fw-bold">
                      <i>WEBSITE</i>
                    </h3>
                  </div>
                  <div className="project-image">
                    <img
                      src={website}
                      className="transform-image float-end p-5"
                      alt="Website Project"
                    />
                  </div>
                </a>
              </Col>
              <Col className="col-12 bg-dark mt-4 overflow-hidden position-relative">
                <a href=" no link" target="_blank" rel="noreferrer">
                  <div className="p-5 position-absolute top-25 start-25">
                    <h3 className="text-white fw-bold">
                      <i>Student Internship</i>
                    </h3>
                    <h3 className="text-white fw-bold">
                      <i>Monitoring System</i>
                    </h3>
                  </div>
                  <div className="project-image">
                    <img
                      src={capstone}
                      className="transform-image float-end p-5"
                      alt="Student Internship Monitoring System"
                    />
                  </div>
                </a>
              </Col>
              <Col className="col-12 bg-dark mt-4 overflow-hidden position-relative">
                <a href="no link" target="_blank" rel="noreferrer">
                  <div className="p-5 position-absolute top-25 start-25">
                    <h3 className="text-white fw-bold">
                      <i>Personal Portfolio</i>
                    </h3>
                  </div>
                  <div className="project-image">
                    <img
                      src={portfolio}
                      className="transform-image float-end p-5"
                      alt="Personal Portfolio"
                    />
                  </div>
                </a>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </Container>
  );
}

export default Home;
