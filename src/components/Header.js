import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Navbar,
  Nav,
  Container,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import "./Header.css";

function AppNavbar() {
  const page = useLocation();
  const activePath = page.pathname;

  const renderTooltip = (props, message) => (
    <Tooltip {...props}>{message}</Tooltip>
  );

  return (
    <Navbar className="py-4 px-1">
      <Container className="py-5 px-5 ms-auto">
        <Navbar.Brand as={NavLink} to="/">
          <h5 className="fw-bold mb-0 pb-0">Jalapa, Kyle C.</h5>
          <p className="text-base font-light text-gray">
            Information Technology
          </p>
        </Navbar.Brand>

        <Nav className="nav-route m-auto gap-4">
          <Nav.Link as={NavLink} to="/about">
            About
            {activePath === "/about" && <i className="bi bi-arrow-down"></i>}
          </Nav.Link>

          <Nav.Link as={NavLink} to="/project">
            Project
            {activePath === "/project" && <i className="bi bi-arrow-down"></i>}
          </Nav.Link>

          <Nav.Link as={NavLink} to="/experience">
            Experience
            {activePath === "/experience" && (
              <i className="bi bi-arrow-down"></i>
            )}
          </Nav.Link>

          <Nav.Link as={NavLink} to="/contact">
            Contact
            {activePath === "/contact" && <i className="bi bi-arrow-down"></i>}
          </Nav.Link>
        </Nav>

        <Navbar.Brand className="d-flex">
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={(props) => renderTooltip(props, "Facebook")}
          >
            <Nav.Link
              href="https://www.facebook.com/ky.lle.967"
              title="facebook"
              target="_blank"
            >
              <i className="bi bi-facebook fs-4 mx-2 text-primary"></i>
            </Nav.Link>
          </OverlayTrigger>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={(props) => renderTooltip(props, "GitHub")}
          >
            <Nav.Link
              href="https://github.com/kylekyle123"
              title="github"
              target="_blank"
            >
              <i className="bi bi-github fs-4 mx-2 text-dark"></i>
            </Nav.Link>
          </OverlayTrigger>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={(props) => renderTooltip(props, "Instagram")}
          >
            <Nav.Link
              href="https://www.instagram.com/i_m_jkyle?igsh=YTl2NW12YzBxdmQ4"
              title="instagram"
              target="_blank"
            >
              <i className="bi bi-instagram fs-4 mx-2 text-dark-primary"></i>
            </Nav.Link>
          </OverlayTrigger>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={(props) => renderTooltip(props, "Tiktok")}
          >
            <Nav.Link
              href="https://www.tiktok.com/@jalapakyle?_t=8nftXdvIz13&_r=1"
              title="tiktok"
              target="_blank"
            >
              <i className="bi bi-tiktok fs-4 mx-2 text-dark-primary"></i>
            </Nav.Link>
          </OverlayTrigger>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
