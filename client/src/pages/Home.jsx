import { styled } from "styled-components";
import CarouselComponent from "../components/home/CarouselComponent";
import {Col, Container, Row} from 'react-bootstrap';
function Home() {
  return (
    <Container fluid>
      <Row>
        <Col md="3">
           <img src="https://media0.giphy.com/media/o1IlGxfDSWhyjduK0c/200w.gif?cid=6c09b952v4mdc2zshm77ingdvpj9jyklx4g6op3t29b92pfb&ep=v1_gifs_search&rid=200w.gif&ct=g" />
           <img src="https://media0.giphy.com/media/o1IlGxfDSWhyjduK0c/200w.gif?cid=6c09b952v4mdc2zshm77ingdvpj9jyklx4g6op3t29b92pfb&ep=v1_gifs_search&rid=200w.gif&ct=g" />
        </Col>
        <Col md="6">
        <CarouselComponent />
        </Col>
        <Col md="3">
           <img src="https://media0.giphy.com/media/o1IlGxfDSWhyjduK0c/200w.gif?cid=6c09b952v4mdc2zshm77ingdvpj9jyklx4g6op3t29b92pfb&ep=v1_gifs_search&rid=200w.gif&ct=g" />
           <img src="https://media0.giphy.com/media/o1IlGxfDSWhyjduK0c/200w.gif?cid=6c09b952v4mdc2zshm77ingdvpj9jyklx4g6op3t29b92pfb&ep=v1_gifs_search&rid=200w.gif&ct=g" />
        </Col>
      </Row>
    </Container>
  );
}

const Content = styled.section`
  img {
    width: 100% !important;
    height: 500px!important;
  }
`;
export default Home;
