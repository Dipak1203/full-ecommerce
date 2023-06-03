import React from "react";
import { Row } from "react-bootstrap";
import styled from "styled-components";
import DashboardCard from "../scene/DashboardCard";
import GroupsIcon from "@mui/icons-material/Groups";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import MoneyOffIcon from "@mui/icons-material/MoneyOff";
const Dashboard = () => {
  
  return (
    <div className="main__content container">
      <Container>
        <Row className="gap-4">
          <DashboardCard
            heading="Customer"
            num={203}
            link="/customer"
            icon={<GroupsIcon />}
            color="text-danger"
          />
          <DashboardCard
            heading="Order"
            num={140}
            link="/customer"
            icon={<ShoppingBasketIcon />}
            color="text-dark"
          />
          <DashboardCard
            heading="Profit"
            num={"$50343"}
            link="/customer"
            icon={<MoneyOffIcon />}
            color="text-primary"
          />
        </Row>
      </Container>
    </div>
  );
};

const Container = styled.section``;
export default Dashboard;
