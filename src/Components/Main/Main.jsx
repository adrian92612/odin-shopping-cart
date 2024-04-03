import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Cart from "../Cart/Cart";

const Main = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  const handleAddItem = (product) => {
    setCartItems((prevItems) =>
      prevItems.some((item) => item.id === product.id)
        ? prevItems.map((item) =>
            item.id === product.id ? { ...item, count: item.count + 1 } : item
          )
        : [...prevItems, { ...product, count: 1 }]
    );
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  return (
    <main>
      <Cart cartItems={cartItems} />
      <Outlet context={{ products, loading, handleAddItem }} />
    </main>
  );
};

export default Main;
