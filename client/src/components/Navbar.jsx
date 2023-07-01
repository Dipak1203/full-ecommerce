import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import Badge from "@mui/material/Badge";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import "./style.css";
import { NavLink } from "react-router-dom";
import axios from 'axios'
const Navbar = ({ user }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };
  const logout = () => {
    // Cookies.remove('cookieName');
    sessionStorage.clear();
    localStorage.clear();
    window.location.href = "/";
  };
  
  return (
    <Container>
      <Content className={`shadow ${isScrolled ? "hide" : ""}`}>
        <Column>
          <Logo>
            <h2>Deal</h2>
          </Logo>
          <MobileMenuIcon onClick={handleMobileMenuToggle} />
          <Pages>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>Shop</li>
            <li
              onMouseEnter={handleDropdownToggle}
              onMouseLeave={handleDropdownToggle}
            >
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
              {user ? (
                <NavLink to={`/user/profile/${user.googleId}`}>
                  <Img src={user.image} alt="img" />
                </NavLink>
              ) : (
                <NavLink to="signup">
                  <PersonOutlineOutlinedIcon className="icon" />
                </NavLink>
              )}
            </li>
            {user ? (
              <li>
                <NavLink to="/" onClick={logout}>Logout</NavLink>
              </li>
            ) : (
              <></>
            )}
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
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  z-index: 100;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
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

  @media (max-width: 768px) {
    display: none;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
    padding: 0 20px;
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  z-index: 100;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  opacity: 1;
  transition: opacity 0.3s ease-in-out;

  &.hide {
    opacity: 0;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Column = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  a{
    text-decoration: none;
    color: #000;
  }
  .search {
    margin-left: -24px;
  }

  @media (max-width: 768px) {
    &:last-child {
      margin-top: 20px;
    }
  }
`;

const Img = styled.img`
  width: 50%;
  border-radius: 50%;
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

  @media (max-width: 768px) {
    margin-left: 0;
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

  @media (max-width: 768px) {
    h2 {
      margin-left: 0;
    }
  }
`;

const MobileMenuIcon = styled(MenuIcon)`
  display: none;

  @media (max-width: 768px) {
    display: block;
    font-size: 30px;
    cursor: pointer;
    margin-left: 10px;
  }
`;

export default Navbar;
