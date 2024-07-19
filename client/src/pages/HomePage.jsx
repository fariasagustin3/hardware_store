import React, { useEffect } from "react";
import TopBar from "../components/TopBar";
import { useStore } from "../store/store";
import axios from "axios";
import Navbar from "../components/Navbar";
import SliderComponent from "../components/SliderComponent";
import CategoriesList from "../components/CategoriesList";
import BrandsList from "../components/BrandsList";
import Footer from "../components/Footer";

const HomePage = () => {
  const getProducts = useStore((state) => state.getProducts);
  const getCategories = useStore((state) => state.getCategories);
  const getBrands = useStore((state) => state.getBrands);
  const loadingOn = useStore((state) => state.loadingOn);
  const loadingOff = useStore((state) => state.loadingOff);
  const loading = useStore((state) => state.loading);
  const products = useStore((state) => state.products);
  const categories = useStore((state) => state.categories);
  const brands = useStore((state) => state.brands);

  useEffect(() => {
    const getData = async () => {
      try {
        loadingOn();
        getCategories();
        getBrands();
        loadingOff();
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, [])

  return (
    <div className="bg-slate-200">
      <TopBar brands={brands} />
      <Navbar />
      <SliderComponent />
      <CategoriesList categories={categories} />
      <BrandsList brands={brands} />
      <Footer />
    </div>
  );
};

export default HomePage;
