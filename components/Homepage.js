import styles from "../styles/Home.module.css";
import { useState } from "react";

import React from "react";

function Homepage() {
  //// map Image ///

  const Image = () => {
    const [hover, setHover] = useState("");
    const imagesData = [
      {
        collection: "Commissioned",
        src: "/7AR00055.jpg",
        description: "Yes",
      },
      {
        collection: "Personal",
        src: "/L1120930.jpg",
        description: "No",
      },
      {
        collection: "Commissioned",
        src: "/7AR09801.jpg",
        description: "Why",
      },

      {
        collection: "Commissioned",
        src: "/L1120710.jpg",
        description: "Nope",
      },
    ];

    /*function handleClick(e) {
      console.dir(e.target);
    }*/

    return (
      <>
        {imagesData.map((data, i) => (
          <div>
            <img
              key={i}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover("")}
              onClick={(e) => handleClick(e)}
              src={data.src}
              description={data.description}
              collection={data.collection}
              className={
                hover === "" || hover === i ? styles.pic : styles.hiddenPic
              }
            />
            <p
              className={
                hover === "" || hover !== i
                  ? styles.hiddenDescription
                  : styles.description
              }
            >
              {" "}
              {data.description}
            </p>
          </div>
        ))}
      </>
    );
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.romanContainer}>
          <div className={styles.topTitle}>
            Roman <span className={styles.cadreDecale}>Cadre</span>
          </div>
        </div>

        <div className={styles.aboutContainer}>
          <div className={styles.text}>
            <div>ABOUT</div>
          </div>
        </div>
        <div className={styles.personalContainer}>
          <div className={styles.text}>
            <div>PERSONAL</div>
          </div>
        </div>
        <div className={styles.commissionedContainer}>
          <div className={styles.text}>
            <div>COMMISSIONED</div>
          </div>
        </div>
        <div className={styles.indexContainer}>
          <div className={styles.text}>
            <div>INDEX</div>
          </div>
        </div>
        <div className={styles.contentContainer}>
          <Image />
        </div>
      </div>
    </>
  );
}

export default Homepage;
