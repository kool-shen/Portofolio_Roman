import styles from "../styles/Home.module.css";
import Images from "../components/Image";
import Loader from "./Loader";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import Link from "next/link";

function Homepage() {
  const hoveredImage = useSelector((state) => state.hoverDisplay.value.image);
  const hoveredCollection = useSelector(
    (state) => state.hoverDisplay.value.collection
  );
  const hoveredDescription = useSelector(
    (state) => state.hoverDisplay.value.description
  );

  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);

  return loader ? (
    <Loader />
  ) : (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.romanContainer}>
          <div className={styles.text}>
            Roman <span className={styles.cadreDecale}>Cadre</span>
          </div>
        </div>

        <div className={styles.aboutContainer}>
          <div>
            <Link
              className={hoveredImage === "" ? styles.text : styles.hiddenText}
              href="/about"
            >
              ABOUT
            </Link>
          </div>
        </div>
        <div className={styles.personalContainer}>
          <div
            className={
              hoveredCollection === "" || hoveredCollection === "Personal"
                ? styles.text
                : styles.hiddenText
            }
          >
            <div>PERSONAL</div>
          </div>
        </div>
        <div className={styles.commissionedContainer}>
          <div
            className={
              hoveredCollection === "" || hoveredCollection === "Commissioned"
                ? styles.text
                : styles.hiddenText
            }
          >
            <div>COMMISSIONED</div>
          </div>
        </div>
        <div className={styles.indexContainer}>
          <div
            className={hoveredImage === "" ? styles.text : styles.hiddenText}
          >
            <div>INDEX</div>
          </div>
        </div>
        <div
          className={
            hoveredImage % 2 == 0
              ? styles.rightDescriptionContainer
              : styles.leftDescriptionContainer
          }
        >
          <div className={styles.text}>{hoveredDescription}</div>
        </div>
        <div className={styles.contentContainer}>
          <Images />
        </div>
      </div>
    </>
  );
}

export default Homepage;
