import React from "react";
import "./filterbar.css";

export default function FilterBar() {
  return (
    <>
      <div className="filters-container">
        <div className="filter-clearfilter-btns">
          <div>Filters</div>
          <div>Clear filters</div>
        </div>

        <div className="cost-filter">
          <label className="checkbox-title">
            <input type="checkbox" name="checkbox" /> Rs. 1500-2000
          </label>
          <label className="checkbox-title">
            <input type="checkbox" name="checkbox" /> Rs. 1500-7000
          </label>
          <label className="checkbox-title">
            <input type="checkbox" name="checkbox" /> Rs. 7000+
          </label>
        </div>
        <div className="color-filter">
          <div className="color-box red"></div>
          <div className="color-box blue"></div>
          <div className="color-box yellow"></div>
          <div className="color-box green"></div>
          <div className="color-box lime-yellow"></div>
        </div>
        <div className="design-template-filter">
          <label className="checkbox-title">
            <input type="checkbox" name="checkbox" /> 2
          </label>
          <label className="checkbox-title">
            <input type="checkbox" name="checkbox" /> 3
          </label>
          <label className="checkbox-title">
            <input type="checkbox" name="checkbox" /> 3+
          </label>
        </div>
        <div className="product-type-filter">
          <label className="checkbox-title">
            <input type="checkbox" name="checkbox" /> Loafers
          </label>
          <label className="checkbox-title">
            <input type="checkbox" name="checkbox" /> Sneakers
          </label>
        </div>
      </div>
    </>
  );
}
