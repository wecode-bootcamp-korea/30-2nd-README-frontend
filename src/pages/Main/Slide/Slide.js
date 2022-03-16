import React from 'react';
import Slider from 'react-slick';
import './slick.css';
import './slick-theme.css';
import styled from 'styled-components';

const Slide = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    autoplaySpeed: 2600,
  };

  const BANNER_IMAGE = [
    { id: 1, image: '/images/banner1.png', alt: 'banner1' },
    { id: 2, image: '/images/banner2.png', alt: 'banner2' },
    { id: 3, image: '/images/banner3.png', alt: 'banner3' },
  ];

  return (
    <Slider {...settings}>
      {BANNER_IMAGE.map(({ id, image, alt }) => (
        <SlideContent key={id}>
          <IMG src={image} alt={alt} />
        </SlideContent>
      ))}
    </Slider>
  );
};

const SlideContent = styled.div`
  height: 390px;
  background: white;
`;

const IMG = styled.img`
  width: 1150px;
  margin: 0 auto;

  &:hover {
    cursor: grabbing;
  }
`;

export default Slide;
