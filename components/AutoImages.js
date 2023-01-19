import styles from "../styles/AutoImages.module.css";
import { useDispatch, useSelector } from "react-redux";
import { display } from "../reducers/hoverDisplay";
import { isClicked } from "../reducers/imageFocus";
import { getIndexInfo } from "../reducers/getIndex";

const AutoImages = () => {
  const dispatch = useDispatch();

  /// Value du reducer getIndex
  const index = useSelector((state) => state.getIndex.value);
  /// Value du reducer hoverDisplay
  const hovered = useSelector((state) => state.hoverDisplay.value);

  /// value du reducer AlbumGenerator ////
  const albumData = useSelector((state) => state.albumGenerator.value);

  /// value du reducer imageFocus ////
  const focusData = useSelector((state) => state.imageFocus.value);

  /// fonction pour gérer le hover ///
  const hover = (i) => {
    dispatch(display(i));
    console.log(albumData);
  };

  // fonction pour gérer le slider

  const imageIsClicked = () => {
    dispatch(isClicked(true));
  };

  /// fonction pour envoyer le bon index ///

  const addIndex = () => {
    dispatch(getIndexInfo(hovered.image + 1));
  };

  return (
    <>
      {albumData.map((data, i) => (
        <div className={styles.picContainer}>
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
                addIndex();
                console.log(albumData);
              }}
              src={data.src}
              description={data.description}
              collection={data.collection}
              className={styles.pic}
            />
          </>
        </div>
      ))}
    </>
  );
};

export default AutoImages;
