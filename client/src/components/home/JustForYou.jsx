import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { styled } from "styled-components";
import Button from "../../scenes/Button";

const JustForYou = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  // Array of random product data (replace with your actual product data)

  // Array of random product images (replace with your actual product images)
  const productImages = [
    "https://images.pexels.com/photos/1070360/pexels-photo-1070360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/60619/boot-leather-shoe-old-60619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/60619/boot-leather-shoe-old-60619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/60619/boot-leather-shoe-old-60619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/60619/boot-leather-shoe-old-60619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/60619/boot-leather-shoe-old-60619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/60619/boot-leather-shoe-old-60619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
  const products = [
    {
      id: 1,
      title: "Product 1",
      price: 19.99,
      rating: 4.5,
      image:
        "https://images.pexels.com/photos/2857040/pexels-photo-2857040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      title: "Product 2",
      price: 29.99,
      rating: 3.8,
      image: "https://images.pexels.com/photos/60619/boot-leather-shoe-old-60619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      title: "Product 3",
      price: 24.99,
      rating: 4.2,
      image: "https://images.pexels.com/photos/60619/boot-leather-shoe-old-60619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
    },
    // Add more products as needed
  ];

  // Generate random product elements
  const generateProducts = () => {
    return products.map((product) => (
      <div key={product.id}>
        <img src={product.image} alt={`Product ${product.id}`} />
        <h4>{product.title}</h4>
        <p>Price: ${product.price}</p>
        <div>Rating: {product.rating} stars</div>
      </div>
    ));
  };

  return (
    <Container className="my-5">
      <h3 className="my-5">Just for you</h3>
      <Content>
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {generateProducts()}
        </Carousel>
      </Content>
      <div className="my-5 text-center">
        <Button title="Explore More"/>
      </div>
    </Container>
  );
};

const Content = styled.section`
  margin-left: 100px;

  img {
    width: 100%;
    padding: 5px;
  }
`;

export default JustForYou;
