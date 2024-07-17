import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BrandsItem from "./BrandsItem";

const BrandsList = ({ brands }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="mt-10 text-center h-full">
      <h1 className="text-black text-2xl font-medium">
        Las mejores marcas para vos
      </h1>
      <div className="px-5 my-5">
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
