import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import Button from '../scenes/Button';

const FooterComponent = () => {
  return (
    <Footer className='my-5'>
      <Container fluid>
        <h3>Subscribe to Thulo.Com Daily Newsletter!</h3>
        <p>Subscribe to our daily newsletter and get updated on latest offers, personalized coupons and everything happening around Thulo.Com</p>
        <FormContainer>
          <Input type='email' placeholder='Enter your email address' />
          <ButtonContainer>
            <Button title="Subscribe" />
          </ButtonContainer>
        </FormContainer>
      </Container>
    </Footer>
  );
};

const Footer = styled.footer``;

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const Input = styled.input`
  width: 80%;
  padding: 10px 10px;
  border: 2px solid black;
  margin-right: 10px;
`;

const ButtonContainer = styled.div`
  margin-left: 5px;
`;

export default FooterComponent;
