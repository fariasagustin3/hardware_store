import React, { useEffect } from "react";
import TopBar from "../components/TopBar";
import { useStore } from "../store/store";
import axios from "axios";

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

  console.log("products: ", products)
  console.log("categories: ", categories)
  console.log("brands: ", brands)

  useEffect(() => {
    const getData = async () => {
      try {
        loadingOn();
        const products = await axios.get("http://localhost:3001/api/products/list");
        const categories = await axios.get("http://localhost:3001/api/categories/list");
        const brands = await axios.get("http://localhost:3001/api/brands/list");

        getProducts(products.data.data);
        getCategories(categories.data);
        getBrands(brands.data);
        loadingOff();
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, [])

  return (
    <div>
      <TopBar brands={brands} />
    </div>
  );
};

export default HomePage;