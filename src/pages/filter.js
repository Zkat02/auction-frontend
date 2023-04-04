import React from "react";
import VegetableFilter from "../components/filter/VegetableFilter";
import vegetableslist from "../helpers/vegetablelist";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const Filter = () => {
  
  const vegetables = vegetableslist;

  return (
    <div>
      <Navbar/>
      <h1>Vegetables Auction</h1>
      <VegetableFilter vegetables={vegetables} />
      <Footer/>
    </div>
  );
};

export default Filter;
