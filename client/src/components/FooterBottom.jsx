import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
const FooterBottom = () => {
  return (
    <Container fluid className="mt-5">
      <Content>
        <Row>
          <Col md="2">
            <h4 className="text-center">CONTACT US</h4>
            <ul>
              <li>
                <NavLink href="#">Customer Care</NavLink>
              </li>
              <li>
                <NavLink href="#">FAQs</NavLink>
              </li>
              <li>
                <NavLink href="#">Return and Refund Policy</NavLink>
              </li>
              <li>
                <NavLink href="#">Privacy Policy</NavLink>
              </li>
              <li>
                <NavLink href="#">Terms and Conditions</NavLink>
              </li>
              <li>
                <NavLink href="#">Raise a ticket</NavLink>
              </li>
            </ul>
          </Col>
          <Col md="2">
            <h4 className="text-center">SASTO DEAL</h4>
            <ul>
              <li className="">
                <NavLink href="#">About Us</NavLink>
              </li>
              <li>
                <NavLink href="#">Careers @ SD</NavLink>
              </li>
              <li>
                <NavLink href="#">Advertise on SD</NavLink>
              </li>
              <li>
                <NavLink href="#">Sell on SD</NavLink>
              </li>
            </ul>
          </Col>
          <Col md="5">
            <h4>Payment Option</h4>
            <img
              src="https://english.onlinekhabar.com/wp-content/uploads/2018/08/cashless-digital-money-e-sewa.jpg"
              className="img-fluid"
            />
          </Col>
          <Col md="3">
            <h6>For better Shopping experience Download Sastodeal app</h6>
            <div className="text-center mt-5">
              <img
                src="https://www.sastodeal.com/media/search/footer_qr_app.png"
                className="text-center"
              />
            </div>
          </Col>
        </Row>

        <div className="bottom">
            <p>Contact with us:</p>
            <ul>
                <li>
                    <FacebookOutlinedIcon className="facebook"/>
                </li>
                <li>
                <i className="fa-brands fa-square-instagram inst"></i>
                </li>
                <li>
                    <FacebookOutlinedIcon className="facebook"/>
                </li>
            </ul>
            <NavLink>
            Deal Pvt. Ltd. Pandol Marga, Lazimpat, Kathmandu
            </NavLink>
        </div>
      </Content>
    </Container>
  );
};

const Content = styled.section`
  ul {
    list-style: none;
  }
  h4 {
    font-weight: 900;
  }
  ul li {
    margin-top: 10px;
  }
  ul li a {
    text-decoration: none;
    color: #000;
    font-size: 15px;
    font-weight: 500;
  }


  .bottom{
    margin-top: 50px;
    display: flex;
    align-items: center;
  }
  .bottom ul{
    display: flex;
    margin-top: -10px;
    gap: 10px;
  }
  .bottom a{
    text-decoration: none;
    margin-top: -10px;
    margin-left: 10px;
    color: #613e98;
  }
  .facebook{
    color: #3b5998;
  }
  .twitter{
    color: #00acee;
  }
  .insta{
    color: #E4405F;
  }

`;

const Payment = styled.ul`
  display: flex;
`;

export default FooterBottom;
