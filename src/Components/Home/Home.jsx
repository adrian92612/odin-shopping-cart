import { useOutletContext } from "react-router-dom";
import ImageSlider from "./ImageSlider/ImageSlider";
import Loading from "../Loading/Loading";

const Home = () => {
  const { products, loading } = useOutletContext();

  return (
    <>
      <h1>HOME PAGE</h1>
      {/* {loading ? <Loading /> : <ImageSlider products={products} />} */}
      <Loading />
    </>
  );
};

export default Home;
