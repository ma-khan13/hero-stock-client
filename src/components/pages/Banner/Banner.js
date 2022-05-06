import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      className="banner-container"
      activeIndex={index}
      onSelect={handleSelect}
    >
      <Carousel.Item className="banner-item">
        <img
          className="d-block w-100"
          src="https://i.ibb.co/qnzvZ0B/banner9.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item className="banner-item">
        <img
          className="d-block w-100"
          src="https://i.ibb.co/ZhB45Xh/banner6.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item className="banner-item">
        <img
          className="d-block w-100"
          src="https://i.ibb.co/6Bf79XY/banner3.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;