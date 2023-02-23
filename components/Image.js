import styles from "../styles/Images.module.css";
import Loader from "../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { display } from "../reducers/hoverDisplay";
import { generate } from "../reducers/albumGenerator";
import { useEffect, useState } from "react";
import ImageItem from "../components/ImageItem";

const Images = (props) => {
  const dispatch = useDispatch();

  const hoveredCollection = useSelector(
    (state) => state.hoverDisplay.value.collection
  );

  /// value du reducer hoverdisplay

  const hovered = useSelector((state) => state.hoverDisplay.value.image);

  /// fonction pour gérer le fetch + envoyer le loader ///

  const [randomizedImagesData, setRandomizedImagesData] = useState([]);

  const loadImage = async () => {
    try {
      const response = await fetch(
        "https://portofolio-roman-back-kool-shen.vercel.app/cloudinary"
      );
      const resource = await response.json();

      if (resource.length > 0) {
        const sortedImages = resource.sort((a, b) => 0.5 - Math.random());
        setRandomizedImagesData(sortedImages);
        console.log(sortedImages);
        setImagesLoaded(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadImage();
  }, []);

  const [imagesLoaded, setImagesLoaded] = useState(false);

  /// fonction pour gérer le hover ///

  const hover = (i) => {
    dispatch(display(i));
  };

  /// fonction pour envoyer la collection dans le reducer ////

  const sendAlbumData = (i) => {
    dispatch(generate(i));
  };

  const sendAlbumInfo = (collection) => {
    const searchResult = randomizedImagesData.filter(
      (word) => word.collection.indexOf(collection) > -1
    );

    sendAlbumData(searchResult);
    {
      scroll();
    }
  };

  return (
    <>
      {!imagesLoaded && <Loader />}
      {imagesLoaded &&
        randomizedImagesData.map((data, i) => (
          <ImageItem
            key={i}
            index={i}
            hovered={hovered}
            hoveredCollection={hoveredCollection}
            data={data}
            hover={hover}
            sendAlbumData={sendAlbumData}
            scroll={props.scroll}
            sendAlbumInfo={sendAlbumInfo}
          />
        ))}
    </>
  );
};

export default Images;
