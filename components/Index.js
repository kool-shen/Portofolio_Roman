import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styles from "../styles/Index.module.css";

export default function IndexAlbum() {
  const [indexList, setIndexList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/cloudinary/album")
      .then((response) => response.json())
      .then((resource) => {
        setIndexList(resource);
      }, []);
  });

  return (
    <div>
      <div className={styles.bigText}>INDEX</div>
      <div className={styles.container}>
        {indexList.map((data, i) => (
          <div className={styles.indexText}>{data.collection}</div>
        ))}
      </div>
    </div>
  );
}
