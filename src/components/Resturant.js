import React, { useState } from "react";
import Foods from "./MenuData";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(
    Foods.map((currEle) => {
      return currEle.category;
    })
  ),
  "All",
];

const Resturant = () => {
  const [menuData, setMenuData] = useState(Foods);
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Foods);
      return;
    }

    const updatedList = Foods.filter((currEle) => {
      return currEle.category === category;
    });
    setMenuData(updatedList);
  };
  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Resturant;
