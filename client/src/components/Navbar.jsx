import React from "react";
import TopNavbar from "./TopNavbar";
import { styled } from "styled-components";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { Row, Col } from "react-bootstrap";
import "./style.css";
const Navbar = () => {
  return (
    <Container>
      <TopNavbar />
      <Row>
        <Col md="3">
          <AcUnitIcon />
          RamroChha
        </Col>
        <Col md="5" className="search">
          <Input placeholder="search product and brand" />
          <ButtonSite>
            <SearchIcon />
            <Button>Search </Button>
          </ButtonSite>
        </Col>
        <Col md="4" className="cartSign">
          <div className="cart">
            <p>Cart</p> <ShoppingCartIcon />
          </div>
          <div className="cart">
            <p>Sign in</p> <PersonIcon />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

const Container = styled.nav`
  background: #e40046;
  color: #fff;
  width: 100%;
`;

const Input = styled.input`
  /* width: 100%; */
`;

const Logo = styled.div``;
const Search = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button``;

const CartSign = styled.div``;

const ButtonSite = styled.div``;

export default Navbar;
