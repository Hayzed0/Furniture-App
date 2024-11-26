import React from "react";
import Banner from "./Banner";
import Card from "./Card";
import Collection from "./Collection";
import Products from "./Products";
import FeaturedProducts from "./FeaturedProducts";
import Blog from "./Blog";
import { useOutletContext } from "react-router-dom";

const Home = () => {
  const myRef = useOutletContext()
  return (
    <>
      <Banner />
      <Card />
      <Products  myRef={myRef}/>
      <Collection />
      <FeaturedProducts />
      <Blog />
    </>
  );
};

export default Home;
