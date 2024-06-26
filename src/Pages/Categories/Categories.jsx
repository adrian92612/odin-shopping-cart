import { useOutletContext, useParams } from "react-router-dom";
// import Loading from "../../../Loading/Loading";
import Loading from "../../Components/Loading/Loading";
import ProductCard from "../../Components/ProductCard/ProductCard";
// import ProductCard from "../../Components/ProductCard/ProductCard";
import styles from "./Categories.module.css";
import { useState } from "react";

const Categories = () => {
  const { category } = useParams();
  const { products, loading, error } = useOutletContext();
  const [priceSort, setPriceSort] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");

  const filteredProductList = products.filter((product) => {
    const matchesCategory = category === "all" || product.category === category;
    const matchesRating = ratingFilter ? product.rating.rate >= ratingFilter : true;
    return matchesCategory && matchesRating;
  });

  const filteredAndSorted = filteredProductList.sort((a, b) =>
    priceSort === "asc" ? a.price - b.price : priceSort === "desc" ? b.price - a.price : 0
  );

  // if (loading) return <Loading />;
  if (error) return <h1>Error: {error}</h1>;
  return (
    <div className={styles.categories}>
      <div className={styles.filters}>
        <select value={priceSort} onChange={(e) => setPriceSort(e.target.value)}>
          <option value="">Sort by price</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
        <select value={ratingFilter} onChange={(e) => setRatingFilter(e.target.value)}>
          <option value="">Filter by Rating</option>
          <option value="1">1 Star and above</option>
          <option value="2">2 Stars and above</option>
          <option value="3">3 Stars and above</option>
          <option value="4">4 Stars and above</option>
        </select>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <ul className={styles.productsContainer}>
          {filteredAndSorted.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Categories;
