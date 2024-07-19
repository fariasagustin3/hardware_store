import React, { useEffect } from "react";
import TopBar from "../components/TopBar";
import axios from "axios";
import { useStore } from "../store/store";
import Navbar from "../components/Navbar";
import FiltersComponent from "../components/FiltersComponent";
import ProductsList from "../components/ProductsList";
import Footer from "../components/Footer";

const ProductsPage = () => {
  const {
    getProducts,
    getBrands,
    getCategories,
    products,
    brands,
    categories,
    CategoryId,
    BrandId,
  } = useStore((state) => state);

  useEffect(() => {
    const getData = async () => {
      try {
        // loadingOn();
        getProducts(BrandId, CategoryId);
        getBrands();
        getCategories();
        // loadingOff();
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, [CategoryId, BrandId]);

  return (
    <div className="w-screen h-full overflow-x-hidden bg-slate-200">
      <TopBar brands={brands} />
      <Navbar />
      <FiltersComponent
        products={products}
        brands={brands}
        categories={categories}
      />
      <ProductsList products={products} />
      <Footer />
    </div>
  );
};

export default ProductsPage;
