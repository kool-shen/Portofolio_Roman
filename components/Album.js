import React from "react";
import styles from "../styles/Album.module.css";
import Image from "next/image";

const Album = () => {
  return (
    <div className={styles.container}>
      <div className={styles.picContainer}>
        <Image
          src="http://res.cloudinary.com/df1kg1ibs/image/upload/v1676285629/Portofolio/Le%20Corbusier/Le_Corbusier_Boulogne00001_ux3z2h.jpg"
          alt="Logo"
          className={styles.pic}
          width={1366}
          height={2048}
        />
      </div>
    </div>
  );
};

export default Album;
