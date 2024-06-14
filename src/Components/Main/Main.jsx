/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
// import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { toast } from "react-toastify";
import { memo } from "react";
import { useProducts } from "../../Helpers/helpers.jsx";
import "./Main.css";

const Main = memo(({ setCartItems }) => {
  const { products, loading, error } = useProducts();

  const handleAddItem = (product) => {
    setCartItems((prevItems) =>
      prevItems.some((item) => item.id === product.id)
        ? prevItems.map((item) =>
            item.id === product.id ? { ...item, count: item.count + 1 } : item
          )
        : [...prevItems, { ...product, count: 1, forCheckOut: false }]
    );
    toast.success(`${product.title} has been added to your cart!`);
  };

  return (
    <main>
      <Outlet context={{ products, loading, error, handleAddItem }} />
    </main>
  );
});

export default Main;
