import styles from "../styles/Content.module.css";
import Images from "../components/Image";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { display } from "../reducers/hoverDisplay";

import React from "react";

function Content() {
  const dispatch = useDispatch();
  const hoveredImage = useSelector((state) => state.hoverDisplay.value.image);
  const hoveredCollection = useSelector(
    (state) => state.hoverDisplay.value.collection
  );
  const hoveredDescription = useSelector(
    (state) => state.hoverDisplay.value.description
  );
  const hoveredYear = useSelector((state) => state.hoverDisplay.value.year);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <div className={styles.text}>Roman Cadre</div>
        <div className={styles.descriptionContainer}>
          <div className={styles.text}> {hoveredCollection} </div>
          <div className={styles.text}> {hoveredDescription} </div>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.about}>ABOUT</div>
        <div className={styles.year}>{hoveredYear}</div>
        <div className={styles.index}>INDEX</div>
      </div>
      <div className={styles.contentContainer}>
        <Images />
      </div>
    </div>
  );
}

export default Content;
