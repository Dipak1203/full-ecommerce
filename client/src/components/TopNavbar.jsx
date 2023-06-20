import React from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
import SmartphoneIcon from '@mui/icons-material/Smartphone';

const TopNavbar = () => {
  return (
    <Container>
      <div>
        <p>Brand wala Quality</p>
      </div>
      <div>
        <ul className='top__nav__list'>
          <li>
            <NavLink to='/'>example@gmail.com</NavLink>
          </li>
          <li>
            <NavLink to='/gift-card'>gift card</NavLink>
          </li>
          <li>
            <NavLink to='/help'>Help Center</NavLink>
          </li>
          <li>
            <NavLink to='/sell'>Sell us</NavLink>
          </li>
          <li>
            <NavLink to='/download-app'>
                <SmartphoneIcon  className='icon'/>
              Download app
            </NavLink>
          </li>
        </ul>
      </div>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  padding: 7px 0px;
  background: #9b0332;
  color: #fff !important;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 13px;

  .top__nav__list {
    list-style: none;
    display: flex;
    color: #fff;
    gap: 12px;

    li {
      a {
        text-decoration: none;
        color: #fff;
      }
    }
    .icon{
        font-size: 15px;
        text-align: center;
    }
  }
`;

export default TopNavbar;
