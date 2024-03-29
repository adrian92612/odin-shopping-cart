/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import CategoryFilter from "../Components/CategoryFilter";
import ShowProducts from "../Components/ShowProducts";
import Loading from "../Components/Loading";

const categoryArray = ["Electronics", "Jewelery", `Men's Clothing`, `Women's Clothing`];

export default function ShopPage() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  function handleClick(category) {
    const items = !category
      ? products
      : products.filter((item) => item.category === category.toLowerCase());
    setFilteredProducts(items);
  }

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await (await fetch(`https://fakestoreapi.com/products`)).json();
        setProducts(response);
        setFilteredProducts(response);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getProducts();
  }, []);

  if (loading) return <Loading />;

  return (
    <div>
      <h2>Categories</h2>
      <CategoryFilter categories={categoryArray} onCategorySelect={handleClick} />
      <ShowProducts products={filteredProducts} />
    </div>
  );
}
