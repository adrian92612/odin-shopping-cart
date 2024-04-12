import { useOutletContext } from "react-router-dom";
import ImageSlider from "./ImageSlider/ImageSlider";
import Loading from "../Loading/Loading";

const Home = () => {
  const { products, loading } = useOutletContext();

  const getRandomItems = () => {
    const selectedIndices = new Set();
    const selectedItems = [];
    while (selectedItems.length < 6) {
      const randomIndex = Math.floor(Math.random() * products.length);
      if (!selectedIndices.has(randomIndex)) {
        selectedIndices.add(randomIndex);
        selectedItems.push(products[randomIndex]);
      }
    }
    console.log(selectedItems);
    return selectedItems;
  };

  return (
    <>
      <h1>HOME PAGE</h1>
      {loading ? <Loading /> : <ImageSlider products={getRandomItems()} />}
    </>
  );
};

export default Home;
