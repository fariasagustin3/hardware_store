import React from "react";
import ProductItem from "./ProductItem";

const ProductsList = ({ products }) => {
  return (
    <div className="px-5 py-5">
      <div className="flex flex-wrap justify-center gap-7">
        {products?.map((product) => (
          <ProductItem product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
