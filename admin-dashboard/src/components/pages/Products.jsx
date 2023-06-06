import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import { Col, Row } from "react-bootstrap";
import Button from '@mui/material/Button';
import Form from "react-bootstrap/Form";
import './style.css'
const Products = () => {
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 100,
    maxColumns: 6,
  });
  return (
    <div className="main__content container">
      <Row className="mt-4">
        <Col md="6">
          <h2
            style={{ fontWeight: "800", borderBottom: "1px solid #000" }}
            className="text-dark"
          >
            Add Products
          </h2>
          <Form>
            <Form.Group
              className="mb-2 text-start"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="product name" />
            </Form.Group>
            <Form.Group
              className="mb-2 text-start"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Price</Form.Label>
              <Form.Control type="number" placeholder="product price *" />
            </Form.Group>
            <Form.Group
              className="mb-2 text-start"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="product title" />
            </Form.Group>
            <Form.Group
              className="mb-2 text-start"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Product Image</Form.Label>
              <Form.Control type="file" placeholder="product title" />
            </Form.Group>
            <Form.Group
              className="mb-2 text-start"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Product Description</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
          <div className="text-start">
          <Button variant="contained">Submit</Button>
          </div>
        </Col>
        <Col md="6" style={{ height: 400, width: "" }}>
        <Button variant="contained" style={{marginLeft:'450px'}} onClick={() => window.location.reload(true)}>Refresh</Button>
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
      </Row>
    </div>
  );
};

export default Products;
