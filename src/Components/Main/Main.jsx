/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
// import Cart from "../Cart/Cart";
// import Cart from "./Cart/Cart";
import { toast } from "react-toastify";
import "./Main.css";
import { memo } from "react";

const Main = memo(({ setCartItems }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) throw new Error("Network response is not ok");
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.error("Failed to fetch products", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  return (
    <main>
      <Outlet context={{ products, loading, error, handleAddItem }} />
    </main>
  );
});

export default Main;
