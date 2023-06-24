import React from "react";
import TopNavbar from "./TopNavbar";
import { styled } from "styled-components";
import Badge from "@mui/material/Badge";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
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
          <SearchOutlinedIcon className="search" />
          <Icon>
            <li>
              <FavoriteBorderIcon className="icon" />
            </li>
            <li>
              <PersonOutlineOutlinedIcon className="icon" />
            </li>
            <li>
              <Badge badgeContent={4} color="primary">
                <ShoppingBagOutlinedIcon className="icon" />
              </Badge>
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

  .search {
    margin-left: -24px;
  }
`;

const Icon = styled.ul`
  display: flex;
  gap: 50px;
  list-style: none;
  align-items: center;
  margin-top: 10px;
  margin-left: 150px;

  .icon {
    font-size: 30px;
  }
`;
const Input = styled.input`
  border: none;
  outline: none;
`;

const Logo = styled.div`
  h2 {
    margin-left: -130px;
  }
`;

export default Navbar;
