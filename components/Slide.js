import React from "react";
import styles from "../styles/Slide.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clear } from "../reducers/albumGenerator";
import { getIndexInfo } from "../reducers/getIndex";
import next from "next";

export default function Slide() {
  const dispatch = useDispatch();

  /// Value du reducer getIndex
  const index = useSelector((state) => state.getIndex.value);

  /// Value du reducer hoverDisplay
  const hovered = useSelector((state) => state.hoverDisplay.value);

  /// value du reducer AlbumGenerator ////

  const albumData = useSelector((state) => state.albumGenerator.value);
  const [currentIndex, setcurrentIndex] = useState(hovered.image);

  /// focntions Next & Previous ///

  function goToNext() {
    const isLastSlide = currentIndex === albumData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setcurrentIndex(newIndex);
    console.log(currentIndex, index);
  }

  function goToPrevious() {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? albumData.length - 1 : currentIndex - 1;
    setcurrentIndex(newIndex);
    console.log(currentIndex, index);
  }

  /*const addIndex = () => {
    dispatch(getIndexInfo(currentIndex + 1));
  };*/

  let twinExists = albumData[currentIndex].hasOwnProperty("twin");

  return (
    <>
      <div className={styles.index}>
        {currentIndex + 1}/ {albumData.length}
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
          <img src={albumData[currentIndex].src} className={styles.firstPic} />
        </div>
        <div
          className={
            twinExists
              ? styles.secondPicContainer
              : styles.secondPicContainerHidden
          }
        >
          <img
            src={albumData[currentIndex].twin}
            className={styles.secondPic}
          />
        </div>
      </div>
    </>
  );
}
