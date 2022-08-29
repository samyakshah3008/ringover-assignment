import React from "react";
import "./usercart-container.css";
import * as AiIcons from "react-icons/ai";
import * as GoIcons from "react-icons/go";
import * as FiIcons from "react-icons/fi";
import * as ImIcons from "react-icons/im";
import { useCart } from "../../contexts/cart-context";

export default function UsercartContainer() {
  const { cart, setCart } = useCart();

  const removeFromCart = (removeid) => {
    setCart(cart.filter((cartItems) => cartItems._id !== removeid));
  };

  return (
    <>
      <div className="usercart-container">
        <div className="usercart-container-header">
          <div className="your-cart">
            <div>CART</div>
            <div> ({cart.length}) </div>
          </div>
          <FiIcons.FiShoppingBag />
        </div>

        {cart.length === 0 ? (
          <>
            <div className="cart-product-container">
              What's stopping you, designer?
            </div>
          </>
        ) : (
          <div className="cart-product-container">
            {cart.map((eachProduct) => {
              return (
                <div className="cart-sub-container">
                  <span
                    onClick={() => removeFromCart(eachProduct._id)}
                    className="dismiss-icon"
                  >
                    <ImIcons.ImCross className="cross" />
                  </span>
                  <div>
                    <img
                      className="cart-product-img"
                      src={eachProduct.imgLink}
                    />
                  </div>
                  <div className="cart-info">
                    <p className="product-name"> {eachProduct.name} </p>
                    <p className="product-desc">KICKSUP and you</p>
                    <p className="product-price"> Rs.{eachProduct.price} </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <div className="usercart-container-footer">
          <div
            className={
              cart.length === 0
                ? "home-calender-section-light-pills"
                : "home-calender-section-dark-pills"
            }
          >
            <GoIcons.GoLocation />
            <div>Home</div>
            <AiIcons.AiOutlineCalendar />
            <div>Select date</div>
          </div>
          <div className="order-btn-section">
            <button
              className={cart.length === 0 ? "grey-order-btn" : "order-btn"}
            >
              Order now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
