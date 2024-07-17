import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const carousel = [
  {
    id: 1,
    image: "/banner-img-1.png",
  },
  {
    id: 2,
    image: "/banner-img-2.png",
  },
  {
    id: 3,
    image: "/banner-img-3.png",
  },
];

const SliderComponent = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <Slider {...settings}>
      {carousel.map(banner => (
        <div key={banner.id} className="w-screen">
          <img src={banner.image} className="w-full h-full" alt="" />
        </div>
      ))}
    </Slider>
  );
};

export default SliderComponent;
