import React from "react";
import styles from "../styles/Slider.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";

export default function Slider() {
  // Value du reducer slideReducer ///
  const slideData = useSelector((state) => state.slideReducer.value);

  /// value du reducer AlbumGenerator ////

  const albumData = useSelector((state) => state.albumGenerator.value);

  /// Split albumData en 2 tableaux d'objet ///

  const albumDataLeft = albumData.filter((_, i) => i % 2 === 0);
  const albumDataRight = albumData.filter((_, i) => i % 2 !== 0);

  //// index en fonction de la photo cliquée ///

  const clickedPhoto = albumData[slideData].src;
  let indexFilter = albumData.findIndex((item) => item.src === clickedPhoto);

  const [currentIndex, setcurrentIndex] = useState(
    indexFilter % 2 === 0 ? indexFilter / 2 : (indexFilter + 1) / 2
  );
  const [currentIndex2, setcurrentIndex2] = useState(
    indexFilter % 2 === 0 ? indexFilter / 2 : (indexFilter - 1) / 2
  );

  /// fonctions Next & Previous ///

  function goToNext() {
    const isLastSlide = currentIndex === albumDataLeft.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setcurrentIndex(newIndex);
    console.log(albumDataLeft);
  }

  function goToPrevious() {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? albumDataLeft.length - 1 : currentIndex - 1;
    setcurrentIndex(newIndex);
  }

  function goToNext2() {
    const isLastSlide = currentIndex2 === albumDataRight.length - 1;
    const newIndex2 = isLastSlide ? 0 : currentIndex2 + 1;
    setcurrentIndex2(newIndex2);
  }

  function goToPrevious2() {
    const isFirstSlide = currentIndex2 === 0;
    const newIndex2 = isFirstSlide
      ? albumDataRight.length - 1
      : currentIndex2 - 1;
    setcurrentIndex2(newIndex2);
  }

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.firstPicContainer}>
          <div
            className={styles.previousContainer}
            onClick={() => {
              goToPrevious();
            }}
          ></div>
          <div
            className={styles.nextContainer}
            onClick={() => {
              goToNext();
            }}
          ></div>
          <Image
            src={albumDataLeft[currentIndex].src}
            width={albumDataRight[currentIndex2].width}
            height={albumDataRight[currentIndex2].height}
            className={styles.firstPic}
          />
        </div>
        <div
          className={
            albumDataRight[currentIndex2].width >
            albumDataRight[currentIndex2].height
              ? styles.secondPicContainerLarge
              : styles.secondPicContainer
          }
        >
          <div
            className={styles.previousContainer}
            onClick={() => {
              goToPrevious2();
            }}
          ></div>
          <div
            className={styles.nextContainer}
            onClick={() => {
              goToNext2();
            }}
          ></div>
          <img
            src={albumDataRight[currentIndex2].src}
            className={styles.secondPic}
            width={albumDataRight[currentIndex2].width}
            height={albumDataRight[currentIndex2].height}
          />
        </div>
      </div>
    </>
  );
}
