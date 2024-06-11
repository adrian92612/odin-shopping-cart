import { NavLink } from "react-router-dom";
import styles from "./CategoryLinks.module.css";

const CategoryLinks = () => {
  const productCategories = [
    "All",
    `Men's Clothing`,
    `Women's Clothing`,
    `Jewelery`,
    `Electronics`,
  ];

  return (
    <nav className={styles.categoryLinks}>
      {productCategories.map((category) => (
        <NavLink key={category} to={`/products/${category.toLowerCase()}`}>
          {category}
        </NavLink>
      ))}
    </nav>
  );
};

export default CategoryLinks;
