import React from "react";
import { Container } from "reactstrap";
const Footer = () => {
  return (
    <>
      <Container
        fluid
        tag="footer"
        className="text-center bg-dark text-white text-uppercase fixed-bottom p-3"
      >
        Firebase Auth Application
      </Container>
    </>
  );
};

export default Footer;
