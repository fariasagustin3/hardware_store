import React from "react";

const BrandsItem = ({ brand }) => {
  return (
    <div className="w-full h-[200px] flex flex-col justify-between rounded-md shadow-lg bg-white">
      <h1 className="text-2xl font-bold mt-5">{brand.name}</h1>
      <div className="w-full h-[120px] bg-slate-400 self-center float-start flex items-center justify-center">
        <img src={brand.image} alt="" className="w-[80px] h-[80px]" />
      </div>
    </div>
  );
};

export default BrandsItem;
