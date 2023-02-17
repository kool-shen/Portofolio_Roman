import styles from "../styles/AutoImages.module.css";
import { useDispatch, useSelector } from "react-redux";
import { display } from "../reducers/hoverDisplay";
import { isClicked } from "../reducers/imageFocus";
import { getSlideData } from "../reducers/slideReducer";
import LazyLoad from "react-lazyload";
import Image from "next/image";

const AutoImages = () => {
  const dispatch = useDispatch();

  /// value du reducer AlbumGenerator ////
  const albumData = useSelector((state) => state.albumGenerator.value);

  /// fonction pour gérer le hover ///
  const hover = (i) => {
    dispatch(display(i));
  };

  /// fonction pour lancer slider ///

  const imageIsClicked = () => {
    dispatch(isClicked(true));
  };

  /// fonction pour filtrer albumData et envoyer la bonne sélection dans le Slider ///

  const sendSlideData = (data) => {
    dispatch(getSlideData(data));
  };

  return (
    <>
      {albumData.map((data, i) => (
        <LazyLoad offset={200} className={styles.picContainer}>
          <>
            <Image
              key={i}
              onMouseEnter={() =>
                hover({
                  image: i,
                  collection: data.collection,
                  description: data.description,
                  year: data.year,
                })
              }
              onMouseLeave={() =>
                hover({ image: "", collection: "", description: "", year: "" })
              }
              onClick={() => {
                imageIsClicked();

                sendSlideData(i);

                console.log(albumData);
              }}
              src={data.src}
              width={data.width}
              height={data.height}
              description={data.description}
              collection={data.collection}
              className={styles.pic}
            />
          </>
        </LazyLoad>
      ))}
    </>
  );
};

export default AutoImages;
