import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { styled } from "styled-components";
import app from './app.png'
const Download = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col md="6">
          <img
            src="https://assets.materialup.com/uploads/41a65959-0a21-4e16-9a08-fcbefd1ae219/preview.jpg"
            alt="download"
            width="100%"
          />
        </Col>
        <Col md="6" className="mt-3 text-start">
         <Content>
         <h1>Download Deal</h1>
          <h1>App Now</h1>
          <p className="mt-4">Fast, Simple & Delightful.</p>
          <p>All it takes is 30 seconds to Download.</p>
          <div style={{display:"flex",justifyContent:"space-around"}}>
            <img src="https://www.logo.wine/a/logo/Google_Play/Google_Play-Badge-Logo.wine.svg" alt="google play store"/>
            <img src={app} alt="google play store"/>
          </div>
         </Content>
        </Col>
      </Row>
    </Container>
  );
};

const Content = styled.section`
    margin-left: 70px;
    h1{
        font-weight: 800;
        font-size: 50px;
    }
    img{
        width: 250px;
        cursor: pointer;
    }
`

export default Download;
