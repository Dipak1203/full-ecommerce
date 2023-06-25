import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Download = () => {
  return (
    <Container>
      <Row>
        <Col md="6">
          <img
            src="https://assets.materialup.com/uploads/41a65959-0a21-4e16-9a08-fcbefd1ae219/preview.jpg"
            alt="download"
            width="100%"
          />
        </Col>
        <Col md="6">
          <h1>Download Deal</h1>
          <h1>App Now</h1>
          <p>Fast, Simple & Delightful.</p>
          <p>All it takes is 30 seconds to Download.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Download;
