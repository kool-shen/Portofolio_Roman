import styles from "../styles/Images.module.css";
import { useDispatch, useSelector } from "react-redux";
import { display } from "../reducers/hoverDisplay";
import { generate } from "../reducers/albumGenerator";
import Link from "next/link";
import { useEffect, useState } from "react";

const Images = (props) => {
  const dispatch = useDispatch();
  //const hoveredImage = useSelector((state) => state.hoverDisplay.value.image);
  const hoveredCollection = useSelector(
    (state) => state.hoverDisplay.value.collection
  );
  const hovered = useSelector((state) => state.hoverDisplay.value.image);

  /// value du reducer AlbumGenerator ////
  const albumData = useSelector((state) => state.albumGenerator.value);

  ////

  const imagesData = [
    {
      collection: "Le Grand Tour de Bretagne",
      src: "/LGTDB/Grand_Tour_de_Bretagne00001.jpg",
      description: "Yes",
      year: 2021,
      twin: "/LGTDB/Grand_Tour_de_Bretagne00002.jpg",
    },
    {
      collection: "Le Grand Tour de Bretagne",
      src: "/LGTDB/Grand_Tour_de_Bretagne00002.jpg",
      description: "Yes",
      year: 2021,
    },
    {
      collection: "Le Grand Tour de Bretagne",
      src: "/LGTDB/Grand_Tour_de_Bretagne00003.jpg",
      description: "Yes",
      year: 2021,
    },
    {
      collection: "Le Grand Tour de Bretagne",
      src: "/LGTDB/Grand_Tour_de_Bretagne00004.jpg",
      description: "Yes",
      year: 2021,
    },
    {
      collection: "Le Grand Tour de Bretagne",
      src: "/LGTDB/Grand_Tour_de_Bretagne00005.jpg",
      description: "Yes",
      year: 2021,
    },
    {
      collection: "Le Grand Tour de Bretagne",
      src: "/LGTDB/Grand_Tour_de_Bretagne00006.jpg",
      description: "Yes",
      year: 2021,
      twin: "LGTDB/Grand_Tour_de_Bretagne00007.jpg",
    },
    {
      collection: "Le Grand Tour de Bretagne",
      src: "/LGTDB/Grand_Tour_de_Bretagne00007.jpg",
      description: "Yes",
      year: 2021,
    },
    {
      collection: "Le Grand Tour de Bretagne",
      src: "/LGTDB/Grand_Tour_de_Bretagne00008.jpg",
      description: "Yes",
      year: 2021,
    },
    {
      collection: "Le Grand Tour de Bretagne",
      src: "/LGTDB/Grand_Tour_de_Bretagne00009.jpg",
      description: "Yes",
      year: 2021,
    },
    {
      collection: "Le Grand Tour de Bretagne",
      src: "/LGTDB/Grand_Tour_de_Bretagne00010.jpg",
      description: "Yes",
      year: 2021,
      twin: "LGTDB/Grand_Tour_de_Bretagne00011.jpg",
    },
    {
      collection: "Le Grand Tour de Bretagne",
      src: "/LGTDB/Grand_Tour_de_Bretagne00011.jpg",
      description: "Yes",
      year: 2021,
    },
    {
      collection: "Le Grand Tour de Bretagne",
      src: "/LGTDB/Grand_Tour_de_Bretagne00012.jpg",
      description: "Yes",
      year: 2021,
    },
    {
      collection: "Le Grand Tour de Bretagne",
      src: "/LGTDB/Grand_Tour_de_Bretagne00013.jpg",
      description: "Yes",
      year: 2021,
    },
    {
      collection: "Le Grand Tour de Bretagne",
      src: "/LGTDB/Grand_Tour_de_Bretagne00014.jpg",
      description: "Yes",
      year: 2021,
      twin: "LGTDB/Grand_Tour_de_Bretagne00015.jpg",
    },
    {
      collection: "Le Grand Tour de Bretagne",
      src: "/LGTDB/Grand_Tour_de_Bretagne00015.jpg",
      description: "Yes",
      year: 2021,
    },
    {
      collection: "Le Grand Tour de Bretagne",
      src: "/LGTDB/Grand_Tour_de_Bretagne00016.jpg",
      description: "Yes",
      year: 2021,
    },
    {
      collection: "Le Grand Tour de Bretagne",
      src: "/LGTDB/Grand_Tour_de_Bretagne00017.jpg",
      description: "Yes",
      year: 2021,
    },
    {
      collection: "Le Grand Tour de Bretagne",
      src: "/LGTDB/Grand_Tour_de_Bretagne00018.jpg",
      description: "Yes",
      year: 2021,
    },
    {
      collection: "Le Grand Tour de Bretagne",
      src: "/LGTDB/Grand_Tour_de_Bretagne00019.jpg",
      description: "Yes",
      year: 2021,
    },
    {
      collection: "Le Grand Tour de Bretagne",
      src: "/LGTDB/Grand_Tour_de_Bretagne00020.jpg",
      description: "Yes",
      year: 2021,
      twin: "/LGTDB/Grand_Tour_de_Bretagne00021.jpg",
    },
    {
      collection: "Le Grand Tour de Bretagne",
      src: "/LGTDB/Grand_Tour_de_Bretagne00021.jpg",
      description: "Yes",
      year: 2021,
    },
    {
      collection: "Le Grand Tour de Bretagne",
      src: "/LGTDB/Grand_Tour_de_Bretagne00022.jpg",
      description: "Yes",
      year: 2021,
    },
    {
      collection: "Le Grand Tour de Bretagne",
      src: "/LGTDB/Grand_Tour_de_Bretagne00023.jpg",
      description: "Yes",
      year: 2021,
    },
    {
      collection: "Le Grand Tour de Bretagne",
      src: "/LGTDB/Grand_Tour_de_Bretagne00024.jpg",
      description: "Yes",
      year: 2021,
      twin: "/LGTDB/Grand_Tour_de_Bretagne00025.jpg",
    },
    {
      collection: "Le Grand Tour de Bretagne",
      src: "/LGTDB/Grand_Tour_de_Bretagne00025.jpg",
      description: "Yes",
      year: 2021,
    },
    {
      collection: "Le Grand Tour de Bretagne",
      src: "/LGTDB/Grand_Tour_de_Bretagne00026.jpg",
      description: "Yes",
      year: 2021,
    },
    {
      collection: "Le Grand Tour de Bretagne",
      src: "/LGTDB/Grand_Tour_de_Bretagne00027.jpg",
      description: "Yes",
      year: 2021,
      twin: "/LGTDB/Grand_Tour_de_Bretagne00028.jpg",
    },

    {
      collection: "Le Grand Tour de Bretagne",
      src: "/LGTDB/Grand_Tour_de_Bretagne00028.jpg",
      description: "Yes",
      year: 2021,
    },
    {
      collection: "Le Grand Tour de Bretagne",
      src: "/LGTDB/Grand_Tour_de_Bretagne00029.jpg",
      description: "Yes",
      year: 2021,
    },
    {
      collection: "Le Grand Tour de Bretagne",
      src: "/LGTDB/Grand_Tour_de_Bretagne00030.jpg",
      description: "Yes",
      year: 2021,
      twin: "/LGTDB/Grand_Tour_de_Bretagne00031.jpg",
    },
    {
      collection: "Le Grand Tour de Bretagne",
      src: "/LGTDB/Grand_Tour_de_Bretagne00031.jpg",
      description: "Yes",
      year: 2021,
    },
    {
      collection: "Le Grand Tour de Bretagne",
      src: "/LGTDB/Grand_Tour_de_Bretagne00032.jpg",
      description: "Yes",
      year: 2021,
      twin: "/LGTDB/Grand_Tour_de_Bretagne00033.jpg",
    },
    {
      collection: "Le Grand Tour de Bretagne",
      src: "/LGTDB/Grand_Tour_de_Bretagne00033.jpg",
      description: "Yes",
      year: 2021,
    },
    {
      collection: "Le Grand Tour de Bretagne",
      src: "/LGTDB/Grand_Tour_de_Bretagne00034.jpg",
      description: "Yes",
      year: 2021,
    },

    //// Le Corbusier ////

    {
      collection: "Le Corbusier",
      src: "Le_Corbusier/Le_Corbusier_Boulogne00001.jpg",
      description: "Yes",
      year: 2020,
      twin: "Le_Corbusier/Le_Corbusier_Boulogne00002.jpg",
    },
    {
      collection: "Le Corbusier",
      src: "Le_Corbusier/Le_Corbusier_Boulogne00002.jpg",
      description: "Yes",
      year: 2020,
    },
    {
      collection: "Le Corbusier",
      src: "Le_Corbusier/Le_Corbusier_Boulogne00003.jpg",
      description: "Yes",
      year: 2020,
      twin: "Le_Corbusier/Le_Corbusier_Boulogne00004.jpg",
    },
    {
      collection: "Le Corbusier",
      src: "Le_Corbusier/Le_Corbusier_Boulogne00004.jpg",
      description: "Yes",
      year: 2020,
    },
    {
      collection: "Le Corbusier",
      src: "Le_Corbusier/Le_Corbusier_Boulogne00005.jpg",
      description: "Yes",
      year: 2020,
      twin: "Le_Corbusier/Le_Corbusier_Boulogne00006.jpg",
    },
    {
      collection: "Le Corbusier",
      src: "Le_Corbusier/Le_Corbusier_Boulogne00006.jpg",
      description: "Yes",
      year: 2020,
    },
    {
      collection: "Le Corbusier",
      src: "Le_Corbusier/Le_Corbusier_Boulogne00007.jpg",
      description: "Yes",
      year: 2020,
    },
    {
      collection: "Le Corbusier",
      src: "Le_Corbusier/Le_Corbusier_Boulogne00008.jpg",
      description: "Yes",
      year: 2020,
      twin: "Le_Corbusier/Le_Corbusier_Boulogne00009.jpg",
    },
    {
      collection: "Le Corbusier",
      src: "Le_Corbusier/Le_Corbusier_Boulogne00009.jpg",
      description: "Yes",
      year: 2020,
      twin: "Le_Corbusier/Le_Corbusier_Boulogne00010.jpg",
    },
    {
      collection: "Le Corbusier",
      src: "Le_Corbusier/Le_Corbusier_Boulogne00010.jpg",
      description: "Yes",
      year: 2020,
    },
    {
      collection: "Le Corbusier",
      src: "Le_Corbusier/Le_Corbusier_Boulogne00011.jpg",
      description: "Yes",
      year: 2020,
    },
    {
      collection: "Le Corbusier",
      src: "Le_Corbusier/Le_Corbusier_Boulogne00012.jpg",
      description: "Yes",
      year: 2020,
    },

    /// Roland Schweitzer ///
    {
      collection: "Roland Schweitzer",
      src: "Roland_Schweitzer/Roland_Schweitzer00001.jpg",
      description: "Yes",
      year: 2020,
      twin: "Roland_Schweitzer/Roland_Schweitzer00002.jpg",
    },
    {
      collection: "Roland Schweitzer",
      src: "Roland_Schweitzer/Roland_Schweitzer00002.jpg",
      description: "Yes",
      year: 2020,
    },
    {
      collection: "Roland Schweitzer",
      src: "Roland_Schweitzer/Roland_Schweitzer00003.jpg",
      description: "Yes",
      year: 2020,
      twin: "Roland_Schweitzer/Roland_Schweitzer00004.jpg",
    },
    {
      collection: "Roland Schweitzer",
      src: "Roland_Schweitzer/Roland_Schweitzer00004.jpg",
      description: "Yes",
      year: 2020,
    },
    {
      collection: "Roland Schweitzer",
      src: "Roland_Schweitzer/Roland_Schweitzer00005.jpg",
      description: "Yes",
      year: 2020,
    },
    {
      collection: "Roland Schweitzer",
      src: "Roland_Schweitzer/Roland_Schweitzer00006.jpg",
      description: "Yes",
      year: 2020,
      twin: "Roland_Schweitzer/Roland_Schweitzer00007.jpg",
    },
    {
      collection: "Roland Schweitzer",
      src: "Roland_Schweitzer/Roland_Schweitzer00007.jpg",
      description: "Yes",
      year: 2020,
    },
    {
      collection: "Roland Schweitzer",
      src: "Roland_Schweitzer/Roland_Schweitzer00008.jpg",
      description: "Yes",
      year: 2020,
    },
    {
      collection: "Roland Schweitzer",
      src: "Roland_Schweitzer/Roland_Schweitzer00009.jpg",
      description: "Yes",
      year: 2020,
      twin: "Roland_Schweitzer/Roland_Schweitzer00010.jpg",
    },
    {
      collection: "Roland Schweitzer",
      src: "Roland_Schweitzer/Roland_Schweitzer00010.jpg",
      description: "Yes",
      year: 2020,
    },
    {
      collection: "Roland Schweitzer",
      src: "Roland_Schweitzer/Roland_Schweitzer00011.jpg",
      description: "Yes",
      year: 2020,
      twin: "Roland_Schweitzer/Roland_Schweitzer00012.jpg",
    },
    {
      collection: "Roland Schweitzer",
      src: "Roland_Schweitzer/Roland_Schweitzer00012.jpg",
      description: "Yes",
      year: 2020,
    },
    {
      collection: "Roland Schweitzer",
      src: "Roland_Schweitzer/Roland_Schweitzer00013.jpg",
      description: "Yes",
      year: 2020,
    },
    {
      collection: "Roland Schweitzer",
      src: "Roland_Schweitzer/Roland_Schweitzer00014.jpg",
      description: "Yes",
      year: 2020,
    },
    {
      collection: "Roland Schweitzer",
      src: "Roland_Schweitzer/Roland_Schweitzer00015.jpg",
      description: "Yes",
      year: 2020,
      twin: "Roland_Schweitzer/Roland_Schweitzer00016.jpg",
    },
    {
      collection: "Roland Schweitzer",
      src: "Roland_Schweitzer/Roland_Schweitzer00016.jpg",
      description: "Yes",
      year: 2020,
    },
    {
      collection: "Roland Schweitzer",
      src: "Roland_Schweitzer/Roland_Schweitzer00017.jpg",
      description: "Yes",
      year: 2020,
    },
  ];
  //affichage aléatoire

  const [map, setmap] = useState(
    imagesData.sort((a, b) => 0.5 - Math.random())
  );

  useEffect(() => {
    setmap(imagesData);
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
      {map.map((data, i) => (
        <div className={styles.picContainer}>
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
                hover({
                  hovered: "",
                  collection: "",
                  description: "",
                  year: "",
                })
              }
              onClick={() => {
                const keyword = data.collection;
                const searchResult = imagesData.filter(
                  (word) => word.collection.indexOf(keyword) > -1
                );

                sendAlbumData(searchResult);
                //console.log(albumData);
                {
                  props.scroll();
                }
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

export default Images;
