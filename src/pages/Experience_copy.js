import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import intern from "../images/intern.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

function Experience() {
  return (
    <Container className="px-1 mx-1">
      <Container className="px-5 ms-5 mx-4">
        <Row className="gap-2">
          <Col className=" col-11 bg-dark mt-4 overflow-hidden position-relative">
            <a href="#" rel="noreferrer">
              <div className="p-5 position-absolute top-25 start-25">
                <h3 className="text-white fw-bold">
                  <br></br>
                  <h1>Experience:</h1>
                  <br></br>
                  <br></br>
                  <br></br>
                  <i>
                    <h3>
                      <u>
                        During Internship <br></br> at DPWH Negros <br></br>
                        Occidental 3rd District <br></br> Engineer
                      </u>
                    </h3>
                  </i>
                </h3>
              </div>
              <div className="project-image ">
                <img
                  src={intern}
                  className="transform-image float-end p-5"
                  alt=""
                />
              </div>
            </a>
          </Col>
        </Row>
      </Container>
      <Container className="px-5 ms-5 mx-4">
        <br></br>
        <h6>
          I was able to know on how to installed a printer with the photocopying
          and fixing desktop that doesn’t turn on. Fixing system unit, fixing
          telephone and crimping and etc. Additionally, I improved my ability/
          knowledge, and understanding on how to repair computers and became
          more familiar with their components.
        </h6>
        <br></br>
        <h6>
          Showcases a well-orchestrated and systematic approach to IT tasks.
          Beginning with the troubleshooting of printer and system unit issues,
          you seamlessly progressed into the foundational work of crimping and
          LAN cable installation, ensuring a stable network infrastructure. The
          subsequent configuration and installation of a router on November 17
          expanded the network capabilities effectively. Culminating with the
          important task of scanning employee documents on November 18
          highlights meticulous attention to detail and compliance needs. This
          comprehensive sequence of tasks reflects your adeptness in addressing
          technical issues, ensuring a smooth and efficient process for the
          entire system setup and maintenance.
        </h6>
        <br></br>
        <h6>
          I immersed myself in a dynamic range of tasks, resurrecting
          non-starting CPU's, fine-tuning printer setups, expertly executing LAN
          cable installations, and meticulously compiling documents. This
          comprehensive experience was a testament to my technical versatility
          and attention to detail.
        </h6>
        <br></br>
        <div className="container border-top"></div>
      </Container>
    </Container>
  );
}

export default Experience;
