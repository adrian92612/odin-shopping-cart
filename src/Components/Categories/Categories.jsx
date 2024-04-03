import { useOutletContext, useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import ProductCard from "../ProductCard/ProductCard";
import "./Categories.css";

const Categories = () => {
  const { category } = useParams();
  const { products, loading } = useOutletContext();

  const productList =
    category === "all" ? products : products.filter((product) => product.category === category);

  if (loading) return <Loading />;

  return (
    <ul className="products-container">
      {productList.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default Categories;
