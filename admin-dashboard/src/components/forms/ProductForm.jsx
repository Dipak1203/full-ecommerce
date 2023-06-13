import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "@mui/material/Button";
import styled from "styled-components";
import "../pages/style.css";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ProductForm = () => {
const [input,setInput] = useState({
  name:'',
  price:'',
  title:'',
  discount:'',
  category:'',
  branch:'',
  size:'',
  description:'',
});
const [image, setImage] = useState(null);


const handleImageChange = (event) => {
  setImage(event.target.files[0]);
};

const {
  name,
  price,
  title,
  discount,
  category,
  branch,
  size,
  description,
} = input;
const handleChange = (e) =>{
  const {name,value} = e.target;
  setInput({...input,[name]:value});
}

const handleSubmit = async (e) => {
  e.preventDefault();

  if (
    name === '' ||
    price === '' ||
    title === '' ||
    discount === '' ||
    category === '' ||
    branch === '' ||
    size === '' ||
    description === '' ||
    !image
  ) {
    toast.error('Please fill in all the fields'); // Display error toast notification
    return;
  }

  const formData = new FormData();
  formData.append('name', name);
  formData.append('price', price);
  formData.append('title', title);
  formData.append('discount', discount);
  formData.append('category', category);
  formData.append('branch', branch);
  formData.append('size', size);
  formData.append('description', description);
  formData.append('image', image); // Append the image file to the form data

  try {
    const res = await axios.post("http://localhost:8000/product/create", formData);
    if (res) {
      toast.success("Product added");
      setInput({
        name: '',
        price: '',
        title: '',
        discount: '',
        category: '',
        branch: '',
        size: '',
        description: '',
      })
      setImage(null);
    }
  } catch (error) {
    toast.error("Failed to add product", error);
    // Handle error if the request fails
  }
};
  return (
    <div className="main__content">
      <Container>
      <ToastContainer />
        <Row>
          <Col md="6">
            <h2
              style={{ fontWeight: "800", borderBottom: "1px solid #000" }}
              className="text-dark"
            >
              Add Products
            </h2>
            <Form encType="multipart/form-data">
              <Form.Group
                className="mb-2 text-start"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" value={name} onChange={handleChange}  placeholder="product name"/>
              </Form.Group>
              <Form.Group
                className="mb-2 text-start"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Price</Form.Label>
                <Form.Control type="number"  name="price" value={price} onChange={handleChange} placeholder="product price *" />
              </Form.Group>
              <Form.Group
                className="mb-2 text-start"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Title</Form.Label>
                <Form.Control type="text"  name="title" value={title} onChange={handleChange} placeholder="product title" />
              </Form.Group>

              <Form.Group
                className="mb-2 text-start"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Discount %</Form.Label>
                <Form.Control type="number"  name="discount" value={discount} onChange={handleChange} placeholder="product title" />
              </Form.Group>
              <Form.Group
                className="mb-2 text-start"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Product Description</Form.Label>
                <Form.Control as="textarea" name="description" value={description} onChange={handleChange} rows={3} />
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
              <input type="file" name="image"  onChange={handleImageChange} className="input" id="image" />
            </Content>
            <Form.Group>
              <Form.Select className="my-3" name="category" value={category} onChange={handleChange}>
                <option>Select the Category</option>
                <option value="t-shirt">T-shirt</option>
                <option value="Shirt">Shirt</option>
                <option value="Paint">Paint</option>
              </Form.Select>
            </Form.Group>
            <Form.Group>
              <Form.Select className="my-3" name="branch" value={branch} onChange={handleChange}>
                <option>Product Branch</option>
                <option>T-shirt</option>
                <option>Shirt</option>
                <option>Paint</option>
              </Form.Select>
            </Form.Group>
            <Form.Group>
              <Form.Select className="my-3" name="size" value={size} onChange={handleChange}>
                <option>Product Size</option>
                <option value="xxl">XXL</option>
                <option value="xl">XL</option>
                <option value="l">L</option>
                <option value="md">Md</option>
                <option value="sm">SM</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <div className="text-center mt-5">
          <Button variant="contained" onClick={handleSubmit}>Submit</Button>
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
