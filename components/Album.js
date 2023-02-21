import React from "react";
import styles from "../styles/Album.module.css";
import Image from "next/image";

const Album = () => {
  const imagesData = [
    {
      collection: "Marseille",
      src: "http://res.cloudinary.com/df1kg1ibs/image/upload/v1676984654/Portofolio/Marseille/marseille-10_cvv3wq.jpg",
      height: 1429,
      width: 2000,
    },
    {
      collection: "Marseille",
      src: "http://res.cloudinary.com/df1kg1ibs/image/upload/v1676984654/Portofolio/Marseille/marseille-9_osrfxd.jpg",
      height: 2000,
      width: 1429,
    },
  ];

  return (
    <div className={styles.contentContainer}>
      {imagesData.map((data, i) => (
        <div className={styles.picContainer}>
          <>
            <Image
              key={i}
              src={data.src}
              width={data.width}
              height={data.height}
              collection={data.collection}
              className={styles.pic}
            />
          </>
        </div>
      ))}
    </div>
  );
};

export default Album;
