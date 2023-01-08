import styles from "../styles/Album.module.css";
import AutoImages from "../components/AutoImages";
import { useDispatch, useSelector } from "react-redux";
import { generate } from "../reducers/albumGenerator";
import Link from "next/link";

import React from "react";

function Album() {
  const dispatch = useDispatch();

  /// value du reducer hoverDisplay
  const hoveredDescription = useSelector(
    (state) => state.hoverDisplay.value.description
  );

  /// value du reducer AlbumGenerator ////
  const albumTitle = useSelector((state) => state.albumGenerator.value);

  ////

  const removeLinkStyle = {
    textDecoration: "none",
    color: "inherit",
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <Link href="/" style={removeLinkStyle}>
          <div className={styles.text}>Roman Cadre</div>
        </Link>
        <div className={styles.descriptionContainer}>
          <div className={styles.text}> {hoveredDescription} </div>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.about}>{albumTitle[0].collection}</div>
      </div>
      <div className={styles.contentContainer}>
        <AutoImages />
      </div>
    </div>
  );
}

export default Album;
