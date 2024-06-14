import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useNavigateToProduct = () => {
  const navigate = useNavigate();
  const navigateToProduct = (id) => navigate(`/products/item/${id}`);
  return navigateToProduct;
};

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) throw new Error("Network response is not ok");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log("Failed to fetch products", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  return { products, loading, error };
};

export { useNavigateToProduct, useProducts };
