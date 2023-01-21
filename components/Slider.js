import React from "react";
import styles from "../styles/Slide.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clear } from "../reducers/albumGenerator";
import next from "next";

export default function Slide() {
  const dispatch = useDispatch();

  // Value du reducer slideReducer ///
  const slideData = useSelector((state) => state.slideReducer.value);

  /// Value du reducer hoverDisplay
  const hovered = useSelector((state) => state.hoverDisplay.value);

  /// value du reducer AlbumGenerator ////

  const albumData = useSelector((state) => state.albumGenerator.value);

  const [currentIndex, setcurrentIndex] = useState(hovered.image);

  /// focntions Next & Previous ///

  function goToNext() {
    const isLastSlide = currentIndex === slideData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setcurrentIndex(newIndex);
  }

  function goToPrevious() {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slideData.length - 1 : currentIndex - 1;
    setcurrentIndex(newIndex);
  }

  let twinExists = slideData.hasOwnProperty("twin");

  /// map ///

  return (
    <>
      <div className={styles.index}>
        {currentIndex + 1}/ {slideData.length}
      </div>
      <div className={styles.mainContainer}>
        <div
          className={styles.previousContainer}
          onClick={() => {
            goToPrevious();
            /*addIndex();*/
          }}
        ></div>
        <div
          className={styles.nextContainer}
          onClick={() => {
            goToNext();
            /*addIndex();*/
          }}
        ></div>
        <div className={styles.firstPicContainer}>
          <img src={slideData[currentIndex].src} className={styles.firstPic} />
        </div>
        <div
          className={
            twinExists
              ? styles.secondPicContainer
              : styles.secondPicContainerHidden
          }
        >
          <img
            src={slideData[currentIndex].twin}
            className={styles.secondPic}
          />
        </div>
      </div>
    </>
  );
}
