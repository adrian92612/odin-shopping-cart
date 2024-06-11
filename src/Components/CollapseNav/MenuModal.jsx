import { NavLink } from "react-router-dom";
import styles from "./MenuModal.module.css";

const MenuModal = () => {
  const categories = ["All", `Men's Clothing`, `Women's Clothing`, `Jewelery`, `Electronics`];

  return (
    <div className={styles.modal}>
      {categories.map((category) => (
        <NavLink key={category} to={`/products/${category.toLowerCase()}`}>
          {category}
        </NavLink>
      ))}
    </div>
  );
};

export default MenuModal;
