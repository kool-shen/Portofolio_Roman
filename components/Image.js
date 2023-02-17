import styles from "../styles/Images.module.css";
import { useDispatch, useSelector } from "react-redux";
import { display } from "../reducers/hoverDisplay";
import { generate } from "../reducers/albumGenerator";
import { useEffect, useState } from "react";
import Image from "next/image";

const Images = (props) => {
  const dispatch = useDispatch();
  const hoveredCollection = useSelector(
    (state) => state.hoverDisplay.value.collection
  );
  const hovered = useSelector((state) => state.hoverDisplay.value.image);

  /// value du reducer AlbumGenerator ////
  const albumData = useSelector((state) => state.albumGenerator.value);

  const [randomizedImagesData, setRandomizedImagesData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/cloudinary")
      .then((response) => response.json())
      .then((resource) => {
        if (resource.length > 0) {
          const sortedImages = resource.sort((a, b) => 0.5 - Math.random());
          setRandomizedImagesData(sortedImages);
        }
      });
  }, []);

  /// fonction pour gérer le hover ///
  const hover = (i) => {
    dispatch(display(i));
  };

  /// fonction pour envoyer la collection dans le reducer ////

  const sendAlbumData = (i) => {
    dispatch(generate(i));
  };

  return (
    <>
      {randomizedImagesData.map((data, i) => (
        <div
          className={styles.picContainer}
          style={{ width: "250px", position: "relative" }}
        >
          <div
            className={
              hovered === "" || hovered === i
                ? styles.albumNameContainer
                : styles.albumNameContainerHidden
            }
          >
            <div className={styles.albumNameText}>{hoveredCollection}</div>
          </div>
          <>
            <div
              className={
                hovered === "" || hovered === i
                  ? styles.whiteDot
                  : styles.whiteDotHidden
              }
            ></div>
            <Image
              key={i}
              className={styles.pic}
              onMouseEnter={() =>
                hover({
                  image: i,
                  collection: data.collection,
                  description: data.description,
                  year: data.year,
                })
              }
              onMouseLeave={() =>
                hover({
                  hovered: "",
                  collection: "",
                  description: "",
                  year: "",
                })
              }
              onClick={() => {
                const keyword = data.collection;
                const searchResult = randomizedImagesData.filter(
                  (word) => word.collection.indexOf(keyword) > -1
                );

                sendAlbumData(searchResult);
                {
                  props.scroll();
                }
              }}
              src={data.src}
              description={data.description}
              collection={data.collection}
              width={data.width}
              height={data.height}
            />
          </>
        </div>
      ))}
    </>
  );
};

export default Images;
