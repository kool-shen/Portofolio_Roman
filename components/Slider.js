import React, { useState } from "react";
import styles from "../styles/Slider.module.css";
import { useDispatch, useSelector } from "react-redux";
import { generate } from "../reducers/albumGenerator";

import Link from "next/link";

export default function Slider() {
  const albumData = useSelector((state) => state.albumGenerator.value);

  const containerStyle = {
    width: "500px",
    height: "700px",
    margin: "0 auto",
  };

  const [currentIndex, setcurrentIndex] = useState(0);

  function goToPrevious() {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? albumData.length - 1 : currentIndex - 1;
    setcurrentIndex(newIndex);
  }

  function goToNext() {
    const isLastSlide = currentIndex === albumData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setcurrentIndex(newIndex);
  }

  function Slider({ slides }) {
    const dispatch = useDispatch();

    const clearCollection = () => {
      dispatch(clear());
    };

    //// STYLES //////

    const slideStyles = {
      width: "100%",
      height: "100%",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundImage: `url(${slides[currentIndex].src})`,
    };

    const removeLinkStyle = {
      textDecoration: "none",
      color: "inherit",
    };

    //// ONCLICK FUNCTIONS ////

    return (
      <div className={styles.sliderStyles}>
        <div className={styles.titleContainer}>
          <Link
            href="/"
            style={removeLinkStyle}
            onClick={() => {
              clearCollection();
            }}
          >
            <div className={styles.title}>RETOUR</div>
          </Link>
          <div className={styles.counter}>
            {currentIndex + 1}/ {albumData.length}
          </div>
          <Link href="/album" style={removeLinkStyle}>
            <div className={styles.title}>ALBUM</div>
          </Link>
        </div>
        <div style={slideStyles}></div>
      </div>
    );
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.previousContainer} onClick={goToPrevious}></div>
      <div className={styles.nextContainer} onClick={goToNext}></div>

      <div style={containerStyle}>
        <Slider slides={albumData} />
      </div>
    </div>
  );
}
