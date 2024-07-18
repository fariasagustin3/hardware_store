import React from "react";

const BrandsItem = ({ brand }) => {
  return (
    <div className="w-full md:w-[90%] h-[400px] flex flex-col justify-between rounded-md shadow-lg bg-white items-center">
      <img src={brand.image} className="w-full h-[60%] relative object-cover" />
      <div className="absolute bottom-[20%] w-[150px] h-[150px] md:w-[120px] md:h-[120px] rounded-full bg-slate-900">
        <div className="flex items-center justify-center h-full">
          <img src={brand.logo} className="w-24 md:w-20" />
        </div>
      </div>
      <span className="text-2xl mb-10 font-semibold">{brand.name}</span>
    </div>
  );
};

export default BrandsItem;
