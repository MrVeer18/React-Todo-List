import React from "react";

const Navbar = ({ filterItem, menuList }) => {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container">
          {menuList.map((category) => {
            return (<div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="category"
                id="BreakFast"
                onClick={() => filterItem(category)}
              />
              <label className="form-check-label" htmlFor="BreakFast">
                {category.toUpperCase()}
              </label>
            </div>); 
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
