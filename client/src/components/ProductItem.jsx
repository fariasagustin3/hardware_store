import React from "react";

const ProductItem = ({ product }) => {
  return (
    <div className="bg-white rounded-md shadow-lg w-[300px] h-[400px]">
      <div className="px-7 py-5 h-full flex flex-col justify-between gap-5">
        <img src={product.image} alt="" className="w-full mb-3 h-[60%] object-contain" />
        <div className="flex flex-col gap-5">
          <p className="text-center font-medium text-lg overflow-hidden">{product.title}</p>
          <p className="text-left font-medium text-2xl overflow-hidden">${product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
