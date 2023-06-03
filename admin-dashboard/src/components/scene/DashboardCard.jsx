import React from "react";
import { Col } from "react-bootstrap";
const DashboardCard = ({heading,num,link}) => {
  return (
      <Col md="3" className="shadow-lg py-2">
        <div className="customers">
          <div className="row">
            <div className="col-md-6">
              <h6 style={{fontWeight:"800"}} className="text-dark">{heading}</h6>
            </div>
            <div className="col-md-6">
              <h6>
              </h6>
            </div>
          </div>
          <h2 className="text-start text-danger" style={{fontWeight:'800'}}>{num}</h2>
          <a className="text-success" style={{fontWeight:"800",cursor:"pointer"}} href={link}>View the ALL</a>
        </div>
      </Col>
  );
};



export default DashboardCard;
