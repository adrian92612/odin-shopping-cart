/* eslint-disable react/prop-types */
import Loading from "../../Loading/Loading";
import styles from "./ImageSlider.module.css";

const ImageSlider = ({ products, loading }) => {
  // if (loading) return <Loading />;
  return (
    <div>
      {products.map((item) => (
        <img key={item.id} src={item.image} />
      ))}
    </div>
  );
};

export default ImageSlider;
