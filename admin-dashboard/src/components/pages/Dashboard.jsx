import React from "react";
import {  Row } from "react-bootstrap";
import styled from "styled-components";
import DashboardCard from "../scene/DashboardCard";
import GroupsIcon from '@mui/icons-material/Groups';

const Dashboard = () => {
  return (
    <div className="main__content container">
      <Container>
        <Row className="gap-4">
          <DashboardCard heading ="Customer"  num={203} link="/customer" />
          <DashboardCard heading ="Order"  num={140} link="/customer" />
          <DashboardCard heading ="Profit"  num={50343} link="/customer" />
        </Row>
      </Container>
    </div>
  );
};

const Container = styled.section``;
export default Dashboard;
