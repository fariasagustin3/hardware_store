import React from "react";
import { useStore } from "../store/store";

const FiltersComponent = ({ categories, brands }) => {
  const { brandSelected, categorySelected } = useStore((state) => state);

  return (
    <div className="w-screen border-b-[1px] border-b-[var(--lightblue)]">
      <div className="py-5 px-5 flex flex-col items-center gap-5 md:flex-row">
        {/* filter by category */}
        <select
          onChange={(event) => categorySelected(event.target.value)}
          className="w-2/3 text-center py-4 focus:outline-none"
        >
          <option value="#" disabled selected>
            Categorías
          </option>
          {categories.map((category) => (
            <option value={category.id}>{category.name}</option>
          ))}
        </select>

        {/* filter by brand */}
        <select
          onChange={(event) => brandSelected(event.target.value)}
          className="w-2/3 text-center py-4 focus:outline-none"
        >
          <option value="#" disabled selected>
            Marcas
          </option>
          {brands.map((brand) => (
            <option value={brand.id}>{brand.name}</option>
          ))}
        </select>

        {/* order */}
        <select className="w-2/3 text-center py-4 focus:outline-none">
          <option value="#" disabled selected>
            Ordenar
          </option>
        </select>
      </div>
    </div>
  );
};

export default FiltersComponent;
