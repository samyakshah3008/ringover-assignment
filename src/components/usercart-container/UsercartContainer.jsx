import React from "react";
import "./usercart-container.css";
import * as AiIcons from "react-icons/ai";
import * as GoIcons from "react-icons/go";
import * as FiIcons from "react-icons/fi";

export default function UsercartContainer() {
  return (
    <>
      <div className="usercart-container">
        <div className="usercart-container-header">
          <div>CART</div>
          <FiIcons.FiShoppingBag />
        </div>
        <div className="cart-product-container">
          What's stopping you, designer?
        </div>
        <div className="usercart-container-footer">
          <div className="home-calender-section-pills">
            <GoIcons.GoLocation />
            <div>Home</div>
            <AiIcons.AiOutlineCalendar />
            <div>Select date</div>
          </div>
          <div className="order-btn-section">
            <button className="order-btn">Order now</button>
          </div>
        </div>
      </div>
    </>
  );
}
