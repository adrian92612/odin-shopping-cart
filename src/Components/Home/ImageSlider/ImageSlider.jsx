/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./ImageSlider.module.css";
import { useEffect } from "react";
import { ArrowNext, ArrowPrev } from "../../SVG/Icons";
import { useNavigateToProduct } from "../../../Helpers/helpers";

const ImageSlider = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageToShow, setImageToShow] = useState(2);
  const navigateToProduct = useNavigateToProduct();

  useEffect(() => {
    const updateImageToShow = () => {
      const n = window.innerWidth < 768 ? 1 : 2;
      setImageToShow(n);
      if (n === 2) {
        setCurrentIndex((prev) => {
          const evenIndex = prev % 0 === 0 ? prev : prev - 1;
          return Math.min(Math.max(evenIndex, 0), products.length - 2);
        });
      }
    };
    window.addEventListener("resize", updateImageToShow);
    return () => window.removeEventListener("resize", updateImageToShow);
  }, [imageToShow, products.length]);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - imageToShow + products.length) % products.length);
  };
  const goToNext = () => {
    setCurrentIndex((prev) => (prev + imageToShow) % products.length);
  };

  const slideOffset = -(currentIndex / imageToShow) * 100;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + imageToShow) % products.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [imageToShow, products.length]);

  return (
    <>
      <h2>Featured Items</h2>
      <div className={styles.carousel}>
        {/* <h1>{currentIndex}</h1> */}
        <div className={styles.carouselTrack} style={{ transform: `translate(${slideOffset}%)` }}>
          {products.map((item) => (
            <div key={item.id} onClick={() => navigateToProduct(item.id)}>
              <img src={item.image} alt=""></img>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
        <button onClick={goToNext}>
          <ArrowPrev />
        </button>
        <button onClick={goToPrev}>
          <ArrowNext />
        </button>
      </div>
    </>
  );
};

export default ImageSlider;
