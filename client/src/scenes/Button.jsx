import React from 'react';
import styled from 'styled-components';

const Button = ({ title }) => {
  return <Btn>{title}</Btn>;
};

const Btn = styled.button`
  border: none;
  outline: none;
  background: #000;
  color: #fff;
  padding: 0.5rem 1rem;
  font-size: 15px;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    transition: all 0.3s ease;
  }

  &:hover:after {
    height: 100%;
  }
`;

export default Button;
