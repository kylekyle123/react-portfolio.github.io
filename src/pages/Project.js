import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import website from "../images/website.jpg";
import capstone from "../images/capstone.jpg";
import portfolio from "../images/portfolio.png";
import "./Style.css";

function Project() {
  return (
    <Container className="px-5 ms-5 mx-4">
      <h1>Projects</h1>
      <i>
        <h5>Here are some of the projects we've worked on.</h5>
      </i>
      <ul>
        <li>
          <h2>Project 1</h2>
          <Row className="gap-2">
            <Col className="col-12 bg-dark mt-4 overflow-hidden position-relative">
              <a href="#" rel="noreferrer">
                <div className="p-5 position-absolute top-0 start-0">
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
          </Row>
        </li>
        <li>
          <h2>Project 2</h2>
          <Row>
            <Col className="col-12 bg-dark mt-4 overflow-hidden position-relative">
              <a href="#" rel="noreferrer">
                <div className="p-5 position-absolute top-0 start-0">
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
                    alt="Capstone Project"
                  />
                </div>
              </a>
            </Col>
          </Row>
        </li>
        <li>
          <h2>Project 3</h2>
          <Row>
            <Col className="col-12 bg-dark mt-4 overflow-hidden position-relative">
              <a href="#" rel="noreferrer">
                <div className="p-5 position-absolute top-0 start-0">
                  <h3 className="text-white fw-bold">
                    <i>Personal Portfolio</i>
                  </h3>
                </div>
                <div className="project-image">
                  <img
                    src={portfolio}
                    className="transform-image float-end p-5"
                    alt="Portfolio Project"
                  />
                </div>
              </a>
            </Col>
          </Row>
        </li>
      </ul>
    </Container>
  );
}

export default Project;
