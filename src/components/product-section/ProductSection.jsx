import React from "react";
import "./product-section.css";
import * as AiIcons from "react-icons/ai";
import productImage1 from "../../assets/images/shoe.jpg";
import productImage2 from "../../assets/images/shoe2.png";

export default function ProductSection() {
  return (
    <>
      <div className="products-container">
        <div className="products-container-header">
          <div className="container-title">Shoes</div>
          <div className="header-btns">
            <AiIcons.AiOutlineSearch />
            <button className="sortby-btn">Sort by</button>
          </div>
        </div>
        <div className="product-cards-container">
          <div className="each-product-card">
            <img className="product-img" src={productImage1} />
            <div className="product-card-title">KSL 01</div>
            <div className="card-details">
              <div>Rs 2000</div>
              <div>Ratings</div>
            </div>
          </div>
          <div className="each-product-card">
            <img className="product-img" src={productImage2} />
            <div className="product-card-title">KSL 01</div>
            <div className="card-details">
              <div>Rs 2000</div>
              <div>Ratings</div>
            </div>
          </div>
          <div className="each-product-card">
            <img className="product-img" src={productImage1} />
            <div className="product-card-title">KSL 01</div>
            <div className="card-details">
              <div>Rs 2000</div>
              <div>Ratings</div>
            </div>
          </div>
          <div className="each-product-card">
            <img className="product-img" src={productImage2} />
            <div className="product-card-title">KSL 01</div>
            <div className="card-details">
              <div>Rs 2000</div>
              <div>Ratings</div>
            </div>
          </div>
          <div className="each-product-card">
            <img className="product-img" src={productImage1} />
            <div className="product-card-title">KSL 01</div>
            <div className="card-details">
              <div>Rs 2000</div>
              <div>Ratings</div>
            </div>
          </div>
          <div className="each-product-card">
            <img className="product-img" src={productImage2} />
            <div className="product-card-title">KSL 01</div>
            <div className="card-details">
              <div>Rs 2000</div>
              <div>Ratings</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
