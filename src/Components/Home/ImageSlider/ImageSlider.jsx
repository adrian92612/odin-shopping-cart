/* eslint-disable react/prop-types */
import { Fragment, useState } from "react";
import styles from "./ImageSlider.module.css";
import { useEffect } from "react";
import { ArrowNext, ArrowPrev } from "../../SVG/Icons";

const ImageSlider = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const slideOffset = -currentIndex * 100;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [products.length]);

  return (
    <>
      <h2>Featured Items</h2>
      <div className={styles.carousel}>
        <div className={styles.carouselTrack} style={{ transform: `translate(${slideOffset}%)` }}>
          {products.map((item) => (
            <Fragment key={item.id}>
              <img src={item.image}></img>
            </Fragment>
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
};

export default ImageSlider;
