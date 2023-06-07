import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import { Col, Row } from "react-bootstrap";
import Button from "@mui/material/Button";

import "./style.css";
import { NavLink } from "react-router-dom";
const Products = () => {
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 100,
    maxColumns: 6,
  });
  return (
    <div className="main__content container">
      <Row className="mt-4">
        <Col md="6" style={{ height: 400, width: "" }}>
          <Button
            variant="contained"
            style={{ marginLeft: "450px" }}
            onClick={() => window.location.reload(true)}
          >
            Refresh
          </Button>
          <h2
            style={{ fontWeight: "800", borderBottom: "1px solid #000" }}
            className="text-dark"
          >
            List of Products
          </h2>
          <DataGrid
            {...data}
            slots={{
              toolbar: GridToolbar,
            }}
          />
        </Col>

        <Col md="6">
          <NavLink to="/product/create">
            <Button variant="contained">
              <i
                className="fa-solid fa-plus"
                style={{ color: "#fff", padding: "0px 8px" }}
              ></i>{" "}
              Create Product
            </Button>
          </NavLink>
        </Col>
      </Row>
    </div>
  );
};

export default Products;
