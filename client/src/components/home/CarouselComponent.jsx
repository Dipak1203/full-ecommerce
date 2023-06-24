import React from 'react'
import Carousel from "react-bootstrap/Carousel";

const CarouselComponent = () => {
  return (
    <div>
       <Carousel>
          <Carousel.Item className="img">
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item className="img">
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item className="img">
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
    </div>
  )
}

export default CarouselComponent