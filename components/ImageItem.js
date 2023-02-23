import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import styles from "../styles/ImageItem.module.css";
import { display } from "../reducers/hoverDisplay";

const ImageItem = ({
  data,

  sendAlbumInfo,
}) => {
  /// gérer le hover ///

  const dispatch = useDispatch();

  const hovered = useSelector((state) => state.hoverDisplay.value.image);

  function hoverize(i) {
    console.log(i);
    dispatch(display(i));
  }

  const [stillLoading, setstillLoading] = useState(true);

  const handleFadeLoad = () => {
    setstillLoading(false);
  };

  return (
    <div
      className={`${styles.picContainer} ${
        !stillLoading && styles.picContainerLoaded
      }`}
    >
      <div
        className={
          hovered === data.src
            ? styles.albumNameContainer
            : styles.albumNameContainerHidden
        }
      >
        <div className={styles.albumNameText}>{data.collection}</div>
      </div>
      <>
        <div
          className={
            hovered === data.src ? styles.whiteDot : styles.whiteDotHidden
          }
        ></div>
        <Image
          className={styles.pic}
          onMouseEnter={() => {
            hoverize({
              image: data.src,
              collection: data.collection,
            }),
              console.log(data.collection);
          }}
          alt={"yo"}
          onMouseLeave={() =>
            hoverize({
              hovered: "",
              collection: "",
            })
          }
          onClick={() => {
            sendAlbumInfo(data.collection);
          }}
          onLoadingComplete={handleFadeLoad}
          src={data.src}
          description={data.description}
          collection={data.collection}
          width={data.width}
          height={data.height}
        />
      </>
    </div>
  );
};

export default ImageItem;
