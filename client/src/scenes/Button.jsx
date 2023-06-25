import React from 'react'
import { styled } from 'styled-components'

const Button = ({title}) => {
  return (
    <Btn>{title}</Btn>
  )
}

const Btn = styled.button`
    border: none;
    outline: none;
    background: #000;
    color:#fff;
    padding:.5rem 1rem ;
    font-size:15px;
    border-radius: 4px;
`

export default Button