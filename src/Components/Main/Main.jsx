/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import { memo } from "react";
import { useProducts } from "../../Helpers/helpers.jsx";
import "./Main.css";

const Main = memo(({ dispatch }) => {
  const { products, loading, error } = useProducts();

  return (
    <main>
      <Outlet context={{ products, loading, error, dispatch }} />
    </main>
  );
});

export default Main;
