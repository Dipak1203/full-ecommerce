import React from "react";
import Slider from "react-slick";
import ProductCard from "./Product";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

const NewArrival = () => {
  const slides = [
    {
      img: "https://rukminim1.flixcart.com/image/200/200/l3vxbbk0/slipper-flip-flop/u/9/i/8-diamond-1-mehandi-diamond-1-black-evok-mehandi-black-original-imagewkb3rmxggfm.jpeg?q=70"
    },
    {
      img: "https://rukminim1.flixcart.com/image/200/200/xif0q/shoe/7/2/m/6-tm-12-6-trm-white-original-imagjqyzz8z9jrgf.jpeg?q=70"
    },
    {
      img: "https://rukminim1.flixcart.com/image/200/200/xif0q/t-shirt/x/v/e/l-all-rbcropn-sky-one-nb-nicky-boy-original-imagkq6hgg5gqsep.jpeg?q=70"
    },
    {
      img: "https://rukminim1.flixcart.com/image/200/200/l3vxbbk0/slipper-flip-flop/u/9/i/8-diamond-1-mehandi-diamond-1-black-evok-mehandi-black-original-imagewkb3rmxggfm.jpeg?q=70"
    },
    {
      img: "https://rukminim1.flixcart.com/image/200/200/xif0q/shoe/7/2/m/6-tm-12-6-trm-white-original-imagjqyzz8z9jrgf.jpeg?q=70"
    },
    {
      img: "https://rukminim1.flixcart.com/image/200/200/xif0q/t-shirt/x/v/e/l-all-rbcropn-sky-one-nb-nicky-boy-original-imagkq6hgg5gqsep.jpeg?q=70"
    },
    {
      img: "https://rukminim1.flixcart.com/image/200/200/l3vxbbk0/slipper-flip-flop/u/9/i/8-diamond-1-mehandi-diamond-1-black-evok-mehandi-black-original-imagewkb3rmxggfm.jpeg?q=70"
    }
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };

  return (
    <div>
      <h2>Responsive Product Carousel</h2>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <ProductCard imgSrc={slide.img} />
            {/* <img src={slide.img} alt={`slide${index}`} /> */}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewArrival;
