import React from "react";
import FilterBar from "../../components/filterbar/FilterBar";
import Navbar from "../../components/navbar/Navbar";
import "../../components/filterbar/filterbar.css";
import ProductSection from "../../components/product-section/ProductSection";
import UsercartContainer from "../../components/usercart-container/UsercartContainer";

export default function StorePage() {
  return (
    <div>
      <Navbar />
      <div className="store-container">
        <FilterBar />
        <ProductSection />
        <UsercartContainer />
      </div>
    </div>
  );
}
