import React, { useState } from "react";
import TopNavbar from "./TopNavbar";
import { styled } from "styled-components";
import Badge from "@mui/material/Badge";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import "./style.css";
const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <Container>
      <TopNavbar />
      <Content className="shadow">
        <Column>
          <Logo>
            <h2>Deal</h2>
          </Logo>
          <Pages>
            <li>Shop</li>
            <li onMouseEnter={handleDropdownToggle} onMouseLeave={handleDropdownToggle}>
              Pages <KeyboardArrowDownOutlinedIcon />
              {isDropdownOpen && (
                <Dropdown>
                  <li>About</li>
                  <li>Services</li>
                  <li>Gallery</li>
                </Dropdown>
              )}
            </li>
            <li>Blog</li>
            <li>Contact</li>
          </Pages>
        </Column>
        <Column>
          <Input placeholder="Type for search" />
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
        </Column>
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

  li {
    position: relative;
    cursor: pointer;
  }
`;

const Dropdown = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1;
  list-style: none;
  padding: 4px 50px;
  
`;

const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Column = styled.div`
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
    margin-left: -110px;
  }
`;

export default Navbar;
