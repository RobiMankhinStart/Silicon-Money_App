import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import BrandList from "../components/BrandList";
import Features from "../components/Features";
import Work from "../components/Work";
import EasyUse from "../components/EasyUse";
import Clients from "../components/Clients";
import Questions from "../components/Questions";
import Subscribe from "../components/Subscribe";

const Home = () => {
  return (
    <div>
      <Banner />
      <BrandList />
      <Features />
      <Work />
      <EasyUse />
      <Clients />
      <Questions />
      <Subscribe />
    </div>
  );
};

export default Home;
