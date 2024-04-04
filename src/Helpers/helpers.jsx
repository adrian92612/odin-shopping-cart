import { useNavigate } from "react-router-dom";

const useNavigateToProduct = () => {
  const navigate = useNavigate();
  const navigateToProduct = (id) => navigate(`/products/item/${id}`);
  return navigateToProduct;
};

export { useNavigateToProduct };
