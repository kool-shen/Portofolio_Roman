import styles from "../styles/Content.module.css";
import Images from "../components/Image";
import AutoImages from "./AutoImages";
import Slide from "./Slide";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import React from "react";
import { clear } from "../reducers/albumGenerator";
import { isClicked } from "../reducers/imageFocus";
import Link from "next/link";

function Content() {
  // Value du reducer albumGenerator

  const albumData = useSelector((state) => state.albumGenerator.value);

  /// value du reducer imageFocus ////
  const focusData = useSelector((state) => state.imageFocus.value);

  ///REDUCER HOVER

  const dispatch = useDispatch();
  const hoveredCollection = useSelector(
    (state) => state.hoverDisplay.value.collection
  );
  const hoveredDescription = useSelector(
    (state) => state.hoverDisplay.value.description
  );
  const hoveredYear = useSelector((state) => state.hoverDisplay.value.year);

  /// Scroll Up à chaque render ///

  const divRef = useRef(null);

  const scrollToTop = () => {
    divRef.current.scroll({
      top: 0,
      behavior: "smooth",
    });
    console.log(divRef.current);
  };

  //// Conditional rendering

  const slideExists = albumData.length > 0 && focusData;
  const albumExists = albumData.length > 0 && !focusData;
  const homeExists = !slideExists && !albumExists;

  let display;
  if (albumData.length > 0 && !focusData) {
    display = <AutoImages />;
  } else if (slideExists) {
    display = <Slide />;
  } else {
    display = <Images scroll={() => scrollToTop()} />;
  }

  const clearStore = (i) => {
    dispatch(clear(i));
  };

  const aboutStyle =
    slideExists || albumExists ? styles.textHidden : styles.about;

  const indexStyle =
    slideExists || albumExists ? styles.textHidden : styles.index;

  const photoContainerStyle = slideExists
    ? styles.slideContainer
    : styles.contentContainer;

  const yearStyle =
    slideExists || albumExists ? styles.textHidden : styles.year;

  const collectionStyle = albumExists ? styles.collection : styles.textHidden;

  const retourStyle = slideExists ? styles.bigText : styles.textHidden;

  const rightContainerStyle = albumExists
    ? styles.rightContainerAlbum
    : styles.rightContainer;

  /// Virer le style du link ///

  const removeLinkStyle = {
    textDecoration: "none",
    color: "inherit",
  };

  /// Virer le slider ////

  const backToAlbum = () => {
    dispatch(isClicked(false));
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.leftContainer}>
          <div
            onClick={() => {
              clearStore();
              backToAlbum();
              scrollToTop();
            }}
            className={styles.romanContainer}
          >
            <div className={styles.roman}>Roman</div>
            <div className={styles.cadre}>Cadre</div>
          </div>
          <div
            className={retourStyle}
            onClick={() => {
              backToAlbum();
            }}
          >
            RETOUR
          </div>
        </div>
        <div className={rightContainerStyle}>
          <Link style={removeLinkStyle} href="/about" className={aboutStyle}>
            À PROPOS
          </Link>
          <div className={yearStyle}>{hoveredYear}</div>
          <div className={collectionStyle}> {albumData[0]?.collection}</div>
          <Link
            style={removeLinkStyle}
            href="/indexAlbum"
            className={indexStyle}
          >
            INDEX
          </Link>
        </div>
        <div className={photoContainerStyle} ref={divRef}>
          {display}
        </div>
      </div>
    </>
  );
}

export default Content;
