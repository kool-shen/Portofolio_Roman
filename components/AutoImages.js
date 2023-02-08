import styles from "../styles/AutoImages.module.css";
import { useDispatch, useSelector } from "react-redux";
import { display } from "../reducers/hoverDisplay";
import { isClicked } from "../reducers/imageFocus";
import { generate } from "../reducers/albumGenerator";
import { getSlideData } from "../reducers/slideReducer";
import LazyLoad from "react-lazyload";

const AutoImages = () => {
  const dispatch = useDispatch();

  /// Value du reducer slideReducer
  const slideData = useSelector((state) => state.slideReducer.value);

  /// value du reducer AlbumGenerator ////
  const albumData = useSelector((state) => state.albumGenerator.value);

  /// value du reducer imageFocus ////
  const focusData = useSelector((state) => state.imageFocus.value);

  /// fonction pour gérer le hover ///
  const hover = (i) => {
    dispatch(display(i));
    //console.log(albumData);
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
            <img
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

                console.log(slideData);
              }}
              src={data.src}
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
