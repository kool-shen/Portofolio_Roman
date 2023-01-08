import React, { useState } from "react";
import styles from "../styles/Slider.module.css";

export default function Slider() {
  const slides = [
    {
      collection: "Marseille",
      url: "/L1120620.jpg",
      description: "Yes",
      year: 2018,
    },
    {
      collection: "Marseille",
      url: "/7AR09801.jpg",
      description: "Yes",
      year: 2018,
    },
    {
      collection: "Marseille",
      url: "/Hameau_solitaire7.jpg",
      description: "Yes",
      year: 2018,
    },
    {
      collection: "Marseille",
      url: "/7AR00055.jpg",
      description: "Yes",
      year: 2018,
    },
    {
      collection: "Marseille",
      url: "/L1130404.jpg",
      description: "Yes",
      year: 2018,
    },
  ];

  const containerStyle = {
    width: "500px",
    height: "700px",
    margin: "0 auto",
  };

  const [currentIndex, setcurrentIndex] = useState(0);

  function goToPrevious() {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setcurrentIndex(newIndex);
  }

  function goToNext() {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setcurrentIndex(newIndex);
  }

  function Slider({ slides }) {
    //// STYLES //////

    const slideStyles = {
      width: "100%",
      height: "100%",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundImage: `url(${slides[currentIndex].url})`,
    };

    const leftArrowStyle = {
      position: "absolute",
      top: "50%",
      left: "32px",
      transform: "translate(0, -50%)",
      color: "white",
      zIndex: 1,
      cursor: "pointer",
    };

    const rightArrowStyle = {
      position: "absolute",
      top: "50%",
      right: "32px",
      transform: "translate(0, -50%)",
      color: "white",
      zIndex: 1,
      cursor: "pointer",
    };

    //// ONCLICK FUNCTIONS ////

    return (
      <div className={styles.sliderStyles}>
        <div style={slideStyles}></div>
        <div className={styles.counter}>
          {" "}
          {currentIndex + 1}/ {slides.length}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.previousContainer} onClick={goToPrevious}></div>
      <div className={styles.nextContainer} onClick={goToNext}></div>

      <div style={containerStyle}>
        <Slider slides={slides} />
      </div>
    </div>
  );
}
