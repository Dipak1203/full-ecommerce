import React from "react";
import { Card, Button } from "react-bootstrap";
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
const ProductCard = (props) => {
  return (
    <>
      <Card style={{ width: "inherit" }} className="product">
        <Card.Img variant="top" src={props.imgSrc}  className="img"/>
        <Card.Body>
          <Card.Title>Jordan</Card.Title>
          <Card.Text>
           $42.0
          </Card.Text>
          <Card.Text>
           <StarOutlinedIcon className="text-warning"/>
           <StarOutlinedIcon className="text-warning"/>
           <StarOutlinedIcon className="text-warning"/>
           <StarOutlinedIcon className="text-warning"/>
           <StarOutlinedIcon className="text-warning"/>
          </Card.Text>
          {/* <div className="product-actions">
            <Button variant="primary">Buy Now</Button>
            <Button variant="secondary">Add to cart</Button>
          </div> */}
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductCard;
