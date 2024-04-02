import { NavLink, Outlet } from "react-router-dom";

const productCategories = ["All", `Men's Clothing`, `Women's Clothing`, `Jewelery`, `Electronics`];

const Products = () => {
  return (
    <div>
      {productCategories.map((category) => (
        <NavLink key={category} to={`/products/${category.toLowerCase()}`}>
          {category}
        </NavLink>
      ))}

      <Outlet />
    </div>
  );
};

export default Products;
