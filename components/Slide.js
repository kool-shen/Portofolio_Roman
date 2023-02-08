import React from "react";
import styles from "../styles/Slide.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Slide() {
  // Value du reducer slideReducer ///
  const slideData = useSelector((state) => state.slideReducer.value);

  /// value du reducer AlbumGenerator ////

  const albumData = useSelector((state) => state.albumGenerator.value);

  let filteredImagesData = albumData.filter((image) => {
    let twinImage = albumData.find((img) => img.twin === image.src);
    if (twinImage) {
      return false;
    }
    return true;
  });

  //// index en fonction de la photo cliquée ///

  const clickedPhoto = albumData[slideData].src;
  const indexFilter = filteredImagesData.findIndex(
    (item) => item.src === clickedPhoto || item.twin === clickedPhoto
  );

  const [currentIndex, setcurrentIndex] = useState(indexFilter);

  /// fonctions Next & Previous ///

  function goToNext() {
    const isLastSlide = currentIndex === filteredImagesData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setcurrentIndex(newIndex);
  }

  function goToPrevious() {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? filteredImagesData.length - 1
      : currentIndex - 1;
    setcurrentIndex(newIndex);
    console.log(currentIndex);
  }

  let twinExists = filteredImagesData[currentIndex].hasOwnProperty("twin");

  return (
    <>
      <div className={styles.index}>
        {currentIndex + 1}/ {filteredImagesData.length}
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
          <img
            src={filteredImagesData[currentIndex].src}
            className={styles.firstPic}
          />
        </div>
        <div
          className={
            twinExists
              ? styles.secondPicContainer
              : styles.secondPicContainerHidden
          }
        >
          <img
            src={filteredImagesData[currentIndex].twin}
            className={styles.secondPic}
          />
        </div>
      </div>
    </>
  );
}
