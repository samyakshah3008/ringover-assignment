import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import UsercartContainer from "../../components/usercart-container/UsercartContainer";
import "./singleproduct-page.css";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../../database/products";
import { useCart } from "../../contexts/cart-context";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";

export default function SingleProductPage() {
  const navigate = useNavigate();
  const { productId } = useParams();
  const { cart, setCart } = useCart();
  const eachProduct = products.find((product) => product._id === productId);
  const addToCartHandler = () => {
    setCart([...cart, eachProduct]);
  };
  const removeFromCartHandler = (removeid) => {
    setCart(cart.filter((cartItems) => cartItems._id !== removeid));
  };

  const isInsideCart =
    cart.filter((product) => product._id === productId).length !== 0;

  return (
    <>
      <Navbar />
      <div className="store-container">
        <div className="single-prod">
          <div className="head">
            <BiIcons.BiArrowBack
              className="back-icon"
              onClick={() => navigate("/")}
            />
            <span className="prod-heading">Your design space</span>
            <div className="designSpace">
              <div className="designContainer">
                <div className="design">
                  <div className="mainImage">
                    <div className="shoes">
                      <img
                        src={eachProduct.imgLink}
                        alt="product"
                        className="shoe-img"
                      />
                    </div>
                    <div className="shoeRate">
                      <div className="rateProduct">
                        <p className="product">Rate Product</p>
                        <AiIcons.AiTwotoneStar className="filled-star" />
                        <AiIcons.AiTwotoneStar className="filled-star" />
                        <AiIcons.AiTwotoneStar className="filled-star" />
                        <AiIcons.AiTwotoneStar className="filled-star" />
                        <AiIcons.AiTwotoneStar className="filled-star" />
                      </div>
                    </div>
                  </div>
                  <div className="optionShoes">
                    <div className="shoes1">
                      <img
                        className="shoe-img"
                        src={eachProduct.imgLink}
                        alt="product"
                      />
                    </div>
                    <div className="shoes1">
                      <img
                        className="shoe-img"
                        src={eachProduct.imgLink}
                        alt="product"
                      />
                    </div>
                    <div className="shoes1">
                      <img
                        className="shoe-img"
                        src={eachProduct.imgLink}
                        alt="product"
                      />
                    </div>
                  </div>
                  <div className="preferenceShoes">
                    <div className="name">
                      <p className="product">{eachProduct.name}</p>
                      <p className="company">By Kicksup</p>
                    </div>

                    <div className="price">
                      <p className="cost">Rs. {eachProduct.price} only </p>
                      <p className="discount">
                        Get an exclusive 20% off shopping with HDFC bank
                      </p>
                    </div>

                    <div className="prod-details">
                      <div className="block-container">
                        <p className="size">Front</p>
                        <div className="front1 block"></div>
                        <div className="front2 block"></div>
                        <div className="front3 block"></div>
                      </div>

                      <div className="block-container">
                        <p className="size">Midd</p>
                        <div className="front1 block"></div>
                        <div className="front2 block"></div>
                        <div className="front3 block"></div>
                      </div>

                      <div className="block-container">
                        <p className="size">Back</p>
                        <div className="front1 block"></div>
                        <div className="front2 block"></div>
                        <div className="front3 block"></div>
                      </div>

                      <div className="block-container">
                        <p className="size">Sole</p>
                        <div className="sole1 block"></div>
                        <div className="sole2 block"></div>
                        <div className="sole3 block"></div>
                      </div>
                      <div className="size">
                        <p className="size">Size</p>
                        <ul>
                          <li className="shoe-size">
                            <input
                              type="checkbox"
                              className="shoe-size-input"
                            />
                            <label for="check_1">7</label>
                          </li>
                          <li className="shoe-size">
                            <input
                              type="checkbox"
                              className="shoe-size-input"
                            />
                            <label for="check_2">8</label>
                          </li>
                          <li className="shoe-size">
                            <input
                              type="checkbox"
                              className="shoe-size-input"
                            />
                            <label for="check_3">9</label>
                          </li>
                          <li className="shoe-size">
                            <input
                              type="checkbox"
                              className="shoe-size-input"
                            />
                            <label for="check_4">10</label>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="buttonLink">
                  <div className="button1">
                    <button className="share-btn">Share design</button>
                  </div>
                  <div className="button2">
                    {!isInsideCart ? (
                      <>
                        <button
                          onClick={addToCartHandler}
                          className="add-to-cart-btn"
                        >
                          Add to cart
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => removeFromCartHandler(eachProduct._id)}
                          className="add-to-cart-btn"
                        >
                          Remove from cart
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <UsercartContainer />
      </div>
    </>
  );
}
