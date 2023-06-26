import React from 'react'
import { Container } from 'react-bootstrap'
import MissoutCard from './MissoutCard'

const Missout = () => {
  return (
    <Container className='my-5' >
        <h1 className='text-center mt-5'>Don't Miss Out on Exclusive Offers</h1>
        <p className='text-center'>Discover exclusive offers and discounts from leading sellers and brands- only a click away!</p>
        <MissoutCard />
    </Container>
  )
}

export default Missout