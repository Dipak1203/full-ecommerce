import React from "react";
import TopNavbar from "./TopNavbar";
import { styled } from "styled-components";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import "./style.css";
const Navbar = () => {
  return (
    <Container>
      <TopNavbar />
      <Content>
        <Colum>
          <Logo>
            <h2>Deal</h2>
          </Logo>
          <Pages>
            <li>Shop</li>
            <li>Pages</li>
            <li>Blog</li>
            <li>Contact</li>
          </Pages>
        </Colum>
        <Colum>
          <Input placeholder="type for search" />
          <Icon>
            <li>
              <FavoriteBorderIcon className="icon"/>
            </li>
            <li>
              <PersonOutlineOutlinedIcon className="icon" />
            </li>
            <li>
            <ShoppingBagOutlinedIcon className="icon" />
            </li>
          </Icon>
        </Colum>
      </Content>
    </Container>
  );
};

const Container = styled.nav`
  width: 100%;
`;

const Pages = styled.ul`
  display: flex;
  gap: 15px;
  align-items: center;
  list-style: none;
  margin-top: 10px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Colum = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
`;

const Icon = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
  align-items: center;
  margin-top: 10px;

  .icon{
    font-size: 30px;
  }
`;
const Input = styled.input`
  /* width: 100%;    */
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
