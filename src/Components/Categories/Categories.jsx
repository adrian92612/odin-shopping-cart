import { useParams } from "react-router-dom";

const Categories = () => {
  const { category } = useParams();
  return <h1>{category}</h1>;
};

export default Categories;
