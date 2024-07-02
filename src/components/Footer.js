import React from "react";
import {
  Navbar,
  Nav,
  Container,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

function AppNavbar() {
  const renderTooltip = (props, message) => (
    <Tooltip {...props}>{message}</Tooltip>
  );
  return (
    <Navbar className="py-4 px-1">
      <Container className="px-5 ms-auto">
        <Navbar.Brand>
          <h5 className="fw-bold mb-0 pb-0">Kyle C. Jalapa</h5>
        </Navbar.Brand>
        <Navbar.Brand className="d-flex">
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={(props) => renderTooltip(props, "Facebook")}
          >
            <Nav.Link
              href="https://www.facebook.com/ky.lle.967"
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
            <Nav.Link href="https://github.com/kylekyle123" target="_blank">
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
