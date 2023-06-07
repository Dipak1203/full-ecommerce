import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "@mui/material/Button";
import styled from "styled-components";
import "../pages/style.css";
import { Group } from "@mui/icons-material";
const ProductForm = () => {
  return (
    <div className="main__content">
      <Container>
        <Row>
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
                <Form.Label>Discount %</Form.Label>
                <Form.Control type="number" placeholder="product title" />
              </Form.Group>
              <Form.Group
                className="mb-2 text-start"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Product Description</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
          </Col>
          <Col md="6">
            <Content>
              <label htmlFor="image" className="label">
                Select Feature Image
                <img
                  src="https://www.lifewire.com/thmb/TRGYpWa4KzxUt1Fkgr3FqjOd6VQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cloud-upload-a30f385a928e44e199a62210d578375a.jpg"
                  width={300}
                />
              </label>
              <input type="file" className="input" id="image" />
            </Content>
            <Form.Group>
              <Form.Select className="my-3">
                <option>Select the Category</option>
                <option>T-shirt</option>
                <option>Shirt</option>
                <option>Paint</option>
              </Form.Select>
            </Form.Group>
            <Form.Group>
              <Form.Select className="my-3">
                <option>Product Branch</option>
                <option>T-shirt</option>
                <option>Shirt</option>
                <option>Paint</option>
              </Form.Select>
            </Form.Group>
            <Form.Group>
              <Form.Select className="my-3">
                <option>Product Size</option>
                <option>XXL</option>
                <option>XL</option>
                <option>L</option>
                <option>Md</option>
                <option>SM</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <div className="text-center mt-5">
          <Button variant="contained">Submit</Button>
        </div>
      </Container>
    </div>
  );
};

const Content = styled.section`
  .input {
    display: none;
  }
  .label {
    display: inline-block;
    padding: 10px;
    background-color: #f0f0f0;
    border: 10px dotted #ccc;
    border-radius: 4px;
    cursor: pointer;
  }

  .label:hover {
    background-color: #e0e0e0;
  }
`;
export default ProductForm;

/*

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

*/
