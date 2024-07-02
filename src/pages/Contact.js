import React from "react";
import { Form, Container } from "react-bootstrap";

function Contact() {
  return (
    <Container className="d-flex flex-column align-items-center px-5 mx-4">
      <h1 className="text-center">Contact Us</h1>
      <h4 className="text-center">
        If you have any questions, feel free to reach out.
      </h4>
      <Form className="w-100 text-center">
        <h5>Alternatively, you can reach us via:</h5>
        <Form.Group controlId="formEmail">
          <Form.Label>
            <h5>Email:</h5>
          </Form.Label>
          <h6>
            <a href="https://www.tiktok.com/@jalapakyle?lang=en">
              jalapakyle9@gmail.com
            </a>
          </h6>
        </Form.Group>
        <Form.Group controlId="formFacebook">
          <Form.Label>
            <h5>Facebook:</h5>
          </Form.Label>
          <h6>
            <a
              href="https://www.facebook.com/ky.lle.967"
              rel="noopener noreferrer"
            >
              https://www.facebook.com/Kyle C. Jalapa
            </a>
          </h6>
        </Form.Group>
        <Form.Group controlId="formInstagram">
          <Form.Label>
            <h5>Contact Number:</h5>
          </Form.Label>
          <h6>
            <a href="09655213727" target="_blank" rel="noopener noreferrer">
              09655213727
            </a>
          </h6>
        </Form.Group>
      </Form>
    </Container>
  );
}

export default Contact;
