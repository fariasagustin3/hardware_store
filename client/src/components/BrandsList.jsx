import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BrandsItem from "./BrandsItem";

const BrandsList = ({ brands }) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: window.innerWidth < 768 ? 1 : 4,
    slidesToScroll: 1,
    accessibility: true,
    arrows: true,
  };

  return (
    <div className="mt-10 text-center h-full mb-20">
      <h1 className="text-black text-2xl font-medium md:mb-10">
        Las mejores marcas para vos
      </h1>
      <div className="px-5 my-5 h-[400px] overflow-y-hidden slider-container">
        <Slider {...settings}>
          {brands.map((brand) => (
            <BrandsItem brand={brand} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BrandsList;
