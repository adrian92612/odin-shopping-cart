import { useOutletContext, Link } from "react-router-dom";
import ImageSlider from "./ImageSlider/ImageSlider";
import Loading from "../../Loading/Loading";
import manWomanPic from "../../../assets/man-woman.jpg";
import jewelleryPic from "../../../assets/jewellery.jpg";
import electronicsPic from "../../../assets/electronics.jpg";
import styles from "./Home.module.css";
import { RightArrow } from "../../SVG/Icons";

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
        <div className={styles.description}>
          <h3>Elevate Your Style with Our Exclusive Collection</h3>
          <p>
            Explore our range of men&apos;s and women&apos;s apparel, perfect for any occasion. For
            men, find everything from sharp suits and tailored shirts to versatile trousers and
            stylish jackets. Our women&apos;s fashion features elegant dresses, chic blouses, and
            sophisticated skirts, designed to celebrate every facet of femininity. <br />
            <br />
            <br />
            Our collection blends style with comfort, offering high-quality fabrics and impeccable
            fits. Whether for a formal event or a casual day out, our apparel is crafted to enhance
            your wardrobe with timeless elegance and modern charm.
          </p>
          <div>
            <Link to={`products/men's clothing`}>
              Men <RightArrow />
            </Link>
            <Link to={`products/women's clothing`}>
              Women
              <RightArrow />
            </Link>
          </div>
        </div>

        <div className={styles.modelImages}>
          <img src={jewelleryPic} alt="" />
        </div>
        <div className={styles.description}>
          <h3>
            Discover the timeless elegance of our jewelry collection, where each piece is crafted
            with precision and passion
          </h3>
          <p>
            From shimmering diamonds to exquisite gemstones, our selection offers a perfect blend of
            classic sophistication and modern style. Whether you&apos;re seeking a statement
            necklace, a pair of stunning earrings, or a delicate bracelet, our pieces are designed
            to enhance your natural beauty and commemorate life’s precious moments. <br />
            <br />
            <br />
            Each item is a testament to fine craftsmanship, ensuring that your jewelry not only
            looks beautiful but also stands the test of time. Perfect for special occasions or
            everyday elegance, our jewelry is crafted to make you feel unique and treasured.
          </p>
          <div>
            <Link to={`products/jewelery`}>
              Jewelery
              <RightArrow />
            </Link>
          </div>
        </div>

        <div className={styles.modelImages}>
          <img src={electronicsPic} alt="" />
        </div>
        <div className={styles.description}>
          <h3>
            Step into the future with our cutting-edge electronics that bring convenience and
            innovation to your fingertips
          </h3>
          <p>
            Our range includes the latest in smart technology, from sleek smartphones and powerful
            laptops to high-definition televisions and smart home devices. Designed to keep you
            connected, entertained, and efficient, our electronics combine high performance with
            user-friendly features. <br />
            <br />
            <br />
            Whether you&apos;re a tech enthusiast or just looking for reliable gadgets, our products
            are tailored to meet your needs and exceed your expectations. Embrace the digital
            revolution with our top-quality electronics, engineered to enhance your lifestyle and
            keep you ahead of the curve.
          </p>
          <div>
            <Link to={`products/electronics`}>
              Electronics
              <RightArrow />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
