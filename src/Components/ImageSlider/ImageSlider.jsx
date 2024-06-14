/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { useState, useEffect, useRef, memo } from "react";
import styles from "./ImageSlider.module.css";
import { ArrowNext, ArrowPrev } from "../SVG/Icons";
import { useNavigateToProduct } from "../../Helpers/helpers";

const ImageSlider = memo(({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageToShow, setImageToShow] = useState(window.innerWidth < 768 ? 1 : 2);
  const timerRef = useRef(null);
  const navigateToProduct = useNavigateToProduct();

  useEffect(() => {
    const updateImageToShow = () => {
      const n = window.innerWidth < 768 ? 1 : 2;
      setImageToShow(n);
      if (n === 2) {
        setCurrentIndex((prev) => {
          const evenIndex = prev % 2 === 0 ? prev : prev - 1;
          return Math.min(Math.max(evenIndex, 0), products.length - 2);
        });
      }
    };

    window.addEventListener("resize", updateImageToShow);
    return () => window.removeEventListener("resize", updateImageToShow);
  }, [products.length]);

  useEffect(() => {
    const startTimer = () => {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + imageToShow) % products.length);
      }, 4000);
    };

    startTimer();

    return () => clearInterval(timerRef.current);
  }, [imageToShow, products.length]);

  useEffect(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + imageToShow) % products.length);
    }, 4000);

    return () => clearInterval(timerRef.current);
  }, [currentIndex, imageToShow, products.length]);

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + imageToShow) % products.length);
    }, 4000);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - imageToShow + products.length) % products.length);
    resetTimer();
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + imageToShow) % products.length);
    resetTimer();
  };

  const slideOffset = -(currentIndex / imageToShow) * 100;

  return (
    <>
      <h2 className={styles.carouselHeading}>Best Sellers</h2>
      <div className={styles.carousel}>
        <div className={styles.carouselTrack} style={{ transform: `translate(${slideOffset}%)` }}>
          {products.map((item) => (
            <div
              className={styles.container}
              key={item.id}
              onClick={() => navigateToProduct(item.id)}
            >
              <div className={styles.imageContainer}>
                <img src={item.image} alt="" />
              </div>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
        <button onClick={goToPrev}>
          <ArrowPrev />
        </button>
        <button onClick={goToNext}>
          <ArrowNext />
        </button>
      </div>
    </>
  );
});

export default ImageSlider;
