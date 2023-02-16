import React, { useState, useEffect } from "react";
import styles from "../styles/Album.module.css";

const Album = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://res.cloudinary.com/dsfqldje9/image/list/Roman%20portofolio.json"
        );
        const data = await response.json();
        setPhotos(data.resources);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.picContainer}>
        {photos.map((photo) => (
          <img
            key={photo.public_id}
            className={styles.pic}
            src={`https://res.cloudinary.com/dsfqldje9/image/upload/${photo.public_id}.jpg`}
          />
        ))}
      </div>
    </div>
  );
};

export default Album;
