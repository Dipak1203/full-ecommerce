import React from "react";
import { styled } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import SwiperCore, { Pagination, Navigation } from "swiper";
import "swiper/css/navigation";

SwiperCore.use([Pagination, Navigation]);

const CarouselComponent = () => {
  return (
    <div>
      <Content>
        <Swiper navigation={true} loop={true} className="mySwiper">
          <SwiperSlide>
            <img
              className="d-block w-100"
              src="https://media.istockphoto.com/id/1284690585/photo/colorful-vegetables-and-fruits-vegan-food-in-rainbow-colors.jpg?b=1&s=612x612&w=0&k=20&c=5RBa1kuAewlJF1CGc_fMAskRQ9ZV4wRPrXJp2wVjIno="
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="d-block w-100"
              src="https://media.istockphoto.com/id/1280856062/photo/variety-of-fresh-organic-vegetables-and-fruits-in-the-garden.jpg?b=1&s=612x612&w=0&k=20&c=OYwjDZurYkufLIL2fne0_bNZDgA9C9bhyhtb5QVzgiE="
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="d-block w-100"
              src="https://media.istockphoto.com/id/1222581489/photo/farmer-woman-holding-wooden-box-full-of-fresh-raw-vegetables.jpg?b=1&s=612x612&w=0&k=20&c=96lbsd7LHWJwHYeaTLIkpxgaji9BSZ5MZ8_SJplISdo="
            />
          </SwiperSlide>
        </Swiper>
      </Content>
    </div>
  );
};

const Content = styled.section`
  .mySwiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default CarouselComponent;
