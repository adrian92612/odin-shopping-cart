import { NavLink } from "react-router-dom";

const CategoryLinks = () => {
  const productCategories = [
    "All",
    `Men's Clothing`,
    `Women's Clothing`,
    `Jewelery`,
    `Electronics`,
  ];

  return (
    <nav className="category-link">
      {productCategories.map((category) => (
        <NavLink key={category} to={`/products/${category.toLowerCase()}`}>
          {category}
        </NavLink>
      ))}
    </nav>
  );
};

export default CategoryLinks;
