import React, { useReducer, useState } from "react";
import { useFilter } from "../../contexts/filter-context";
import "./filterbar.css";

export default function FilterBar() {
  const { dispatch } = useFilter();
  const [category, setCategory] = useState({
    loafers: false,
    sneakers: false,
  });
  const [price, setPrice] = useState({
    isBetween1500to4000: false,
    isBetween4001to7000: false,
    isAbove7001: false,
  });
  const updateCategory = (e) =>
    setCategory((obj) => ({
      ...obj,
      [e.target.name]: e.target.checked,
    }));
  const updatePrice = (e) => {
    setPrice((obj) => ({
      ...obj,
      [e.target.name]: e.target.checked,
    }));
  };

  const applyFilter = () => {
    dispatch({
      type: "APPLY_FILTER",
      payload: {
        priceRange: price,
        categories: category,
      },
    });
  };
  return (
    <>
      <div className="filters-container">
        <div className="filter-clearfilter-btns">
          <div>Filters</div>
          <button className="filter-btn" onClick={applyFilter}>
            Apply filters
          </button>
        </div>
        <div className="cost-filter">
          <b>COST</b>
          <label className="checkbox-title">
            <input
              onChange={updatePrice}
              type="checkbox"
              name="isBetween1500to4000"
              value="4000"
            />
            Rs. 1500-4000
          </label>
          <label className="checkbox-title">
            <input
              onChange={updatePrice}
              type="checkbox"
              value="7000"
              name="isBetween4001to7000"
            />
            Rs. 4001-7000
          </label>
          <label className="checkbox-title">
            <input
              onChange={updatePrice}
              type="checkbox"
              name="isAbove7001"
              value="8001"
            />
            Rs. 7001+
          </label>
        </div>
        <b>COLOR</b>
        <div className="color-filter">
          <div className="color-box red"></div>
          <div className="color-box blue"></div>
          <div className="color-box yellow"></div>
          <div className="color-box green"></div>
          <div className="color-box lime-yellow"></div>
        </div>
        <div className="design-template-filter">
          <b>DESIGN TEMPLATES</b>
          <label className="checkbox-title">
            <input type="checkbox" name="checkbox" value="4000" /> 1
          </label>
          <label className="checkbox-title">
            <input type="checkbox" name="checkbox" value="7000" /> 4
          </label>
          <label className="checkbox-title">
            <input type="checkbox" name="checkbox" value="8000" /> 7+
          </label>
        </div>
        <div className="product-type-filter">
          <b>TYPE</b>
          <label className="checkbox-title">
            <input onChange={updateCategory} type="checkbox" name="loafers" />
            Loafers
          </label>
          <label className="checkbox-title">
            <input onChange={updateCategory} type="checkbox" name="sneakers" />
            Sneakers
          </label>
        </div>
      </div>
    </>
  );
}
