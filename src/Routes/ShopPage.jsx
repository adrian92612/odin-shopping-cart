/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import CategoryFilter from "../Components/CategoryFilter";
import ShowProducts from "../Components/ShowProducts";
import Loading from "../Components/Loading";
import Cart from "./Cart";

const categoryArray = ["Electronics", "Jewelery", `Men's Clothing`, `Women's Clothing`];

export default function ShopPage() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleClick = (category) => {
    const items = !category
      ? products
      : products.filter((item) => item.category === category.toLowerCase());
    setFilteredProducts(items);
  };

  const handleItemCount = (itemId, adjustment) => {
    setSelectedItems((currentItems) =>
      currentItems.map((item) =>
        item.id === itemId ? { ...item, count: Math.max(1, item.count + adjustment) } : item
      )
    );
  };

  const handleAddItem = (item) => {
    setSelectedItems((currentItems) => {
      const existingItemIndex = currentItems.findIndex((currItem) => currItem.id === item.id);
      if (existingItemIndex !== -1) {
        return currentItems.map((item, i) =>
          i === existingItemIndex ? { ...item, count: item.count + 1 } : item
        );
      } else {
        return [...currentItems, { ...item, count: 1 }];
      }
    });
  };

  const handleRemoveItem = (itemId) =>
    setSelectedItems((currentItems) => currentItems.filter((item) => item.id !== itemId));

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
      <ShowProducts products={filteredProducts} handleClick={handleAddItem} />
      <Cart items={selectedItems} handleCount={handleItemCount} handleRemove={handleRemoveItem} />
    </div>
  );
}
