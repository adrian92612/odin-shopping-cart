import { useOutletContext, Link } from "react-router-dom";
import ImageSlider from "./ImageSlider/ImageSlider";
import Loading from "../Loading/Loading";
import manWomanPic from "../../assets/man-woman.jpg";
import jewelleryPic from "../../assets/jewellery.jpg";
import electronicsPic from "../../assets/electronics.jpg";
import styles from "./Home.module.css";

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
    return selectedItems;
  };

  return (
    <>
      {loading ? <Loading /> : <ImageSlider products={getRandomItems()} />}
      <div className={styles.container}>
        <div className={styles.modelImages}>
          <img src={manWomanPic} alt="" />
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dolores ab, error nesciunt
            facilis voluptatem at asperiores rem exercitationem sint neque modi tempora mollitia id,
            repellendus dolor in iste cupiditate.
          </p>

          <Link to={`products/men's clothing`}>Men</Link>
          <Link to={`products/women's clothing`}>Women</Link>
        </div>

        <div className={styles.modelImages}>
          <img src={jewelleryPic} alt="" />
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dolores ab, error nesciunt
            facilis voluptatem at asperiores rem exercitationem sint neque modi tempora mollitia id,
            repellendus dolor in iste cupiditate.
          </p>
          <Link to={`products/jewelery`}>Jewelery</Link>
        </div>

        <div className={styles.modelImages}>
          <img src={electronicsPic} alt="" />
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dolores ab, error nesciunt
            facilis voluptatem at asperiores rem exercitationem sint neque modi tempora mollitia id,
            repellendus dolor in iste cupiditate.
          </p>
          <Link to={`products/electronics`}>Electronics</Link>
        </div>
      </div>
    </>
  );
};

export default Home;
