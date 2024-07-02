import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import experience123 from "../images/experience123.png";
import "./Style.css";

function Project() {
  return (
    <Container className="px-5 ms-5 mx-4">
      <h1>Experience</h1>
      <i>
        <h5>
          During my internship at the Department of Public Works and Highways
          (DPWH).
        </h5>
      </i>
      <ul>
        <li>
          <Row className="gap-2">
            <Col className="col-12 bg-dark mt-4 overflow-hidden position-relative">
              <div className="p-5 position-absolute top-0 start-0 animated-text">
                <h3 className="text-white fw-bold">
                  <i>
                    This photo captures <br /> us crimping a LAN
                    <br /> cable and installing
                    <br /> Wi-Fi at the DPWH,
                    <br /> showcasing our
                    <br /> practical involvement
                    <br /> in network
                    <br /> setup and
                    <br /> configuration.
                  </i>
                </h3>
              </div>
              <div className="project-image animated-image">
                <img
                  src={experience123}
                  className="float-end p-5"
                  alt="Experience at DPWH"
                />
              </div>
            </Col>
          </Row>
        </li>
      </ul>
      <Container className="px-5 ms-5 mx-4">
        <br />
        <h6>
          I learned how to install a printer, photocopy, and fix desktops that
          didn’t turn on. I also worked on fixing system units, telephones,
          crimping, and more. Additionally, I improved my ability and knowledge
          in repairing computers and became more familiar with their components.
        </h6>
        <br />
        <h6>
          This experience showcases a well-orchestrated and systematic approach
          to IT tasks. Beginning with troubleshooting printer and system unit
          issues, I seamlessly progressed into foundational work of crimping and
          LAN cable installation, ensuring a stable network infrastructure. The
          subsequent configuration and installation of a router on November 17
          expanded the network capabilities effectively. Culminating with the
          important task of scanning employee documents on November 18
          highlights meticulous attention to detail and compliance needs. This
          comprehensive sequence of tasks reflects my adeptness in addressing
          technical issues, ensuring a smooth and efficient process for the
          entire system setup and maintenance.
        </h6>
        <br />
        <h6>
          I immersed myself in a dynamic range of tasks, resurrecting
          non-starting CPUs, fine-tuning printer setups, expertly executing LAN
          cable installations, and meticulously compiling documents. This
          comprehensive experience was a testament to my technical versatility
          and attention to detail.
        </h6>
        <br />
        <div className="container border-top"></div>
      </Container>
    </Container>
  );
}

export default Project;
