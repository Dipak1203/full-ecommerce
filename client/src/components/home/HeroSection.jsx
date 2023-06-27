import {Col, Container, Row} from 'react-bootstrap';
import CarouselComponent from "./CarouselComponent";
import Ad from "./Ad";
const HeroSection = () => {
  return (
    <Container fluid className='mt-5'>
    <Row>
      <Col md="3">
        <Ad />
        <Ad />
      </Col>
      <Col md="6">
      <CarouselComponent />
      </Col>
      <Col md="3">
         <Ad />
         <Ad />
      </Col>
    </Row>
  </Container>
  )
}

export default HeroSection