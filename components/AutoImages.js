import styles from "../styles/AutoImages.module.css";
import { useDispatch, useSelector } from "react-redux";
import { display } from "../reducers/hoverDisplay";
import { generate } from "../reducers/albumGenerator";
import Link from "next/link";

const AutoImages = () => {
  const dispatch = useDispatch();
  //const hoveredImage = useSelector((state) => state.hoverDisplay.value.image);
  const hoveredCollection = useSelector(
    (state) => state.hoverDisplay.value.collection
  );

  /// value du reducer AlbumGenerator ////
  const albumData = useSelector((state) => state.albumGenerator.value);

  const imagesData = [
    {
      collection: "Commissioned",
      src: "/L1120710.jpg",
      description: "Yes",
      year: 2021,
    },
    {
      collection: "Commissioned",
      src: "/L1100328.jpg",
      description: "Yes",
      year: 2022,
    },

    {
      collection: "Personal",
      src: "/L1120930.jpg",
      description: "No",
      year: 2019,
    },
    {
      collection: "Personal",
      src: "/Panorama_sans_titre3.jpg",
      description: "No",
      year: 2018,
    },

    {
      collection: "Personal",
      src: "/7AR09801.jpg",
      description: "Why",
      year: 2018,
    },

    {
      collection: "Personal",
      src: "/Hameau_solitaire7.jpg",
      description: "Yes",
      year: 2018,
    },

    {
      collection: "Commissioned",
      src: "/7AR00055.jpg",
      description: "Nope",
      year: 2018,
    },

    {
      collection: "Personal",
      src: "/L1130404.jpg",
      description: "Yes",
      year: 2018,
    },

    /////

    {
      collection: "Commissioned",
      src: "/L1120620.jpg",
      description: "Yes",
      year: 2018,
    },
    {
      collection: "Personal",
      src: "/L1120571.jpg",
      description: "No",
      year: 2018,
    },
    {
      collection: "Personal",
      src: "/L1120452.jpg",
      description: "Why",
    },

    {
      collection: "Commissioned",
      src: "/7AR01875.jpg",
      description: "Nope",
    },

    {
      collection: "Personal",
      src: "/7AR09247.jpg",
      description: "Yes",
    },

    /////

    {
      collection: "Commissioned",
      src: "/7AR04204.jpg",
      description: "Yes",
    },
    {
      collection: "Personal",
      src: "/7AR04218.jpg",
      description: "No",
    },
    {
      collection: "Personal",
      src: "/L1140476.jpg",
      description: "Why",
    },

    {
      collection: "Commissioned",
      src: "/L1140697.jpg",
      description: "Nope",
    },

    {
      collection: "Personal",
      src: "/7AR00001.jpg",
      description: "Yes",
    },

    /////

    {
      collection: "Commissioned",
      src: "/7AR00007.jpg",
      description: "Yes",
    },
    {
      collection: "Personal",
      src: "/7AR00052.jpg",
      description: "No",
    },
    {
      collection: "Personal",
      src: "/7AR00140.jpg",
      description: "Why",
    },

    {
      collection: "Commissioned",
      src: "/7AR00175.jpg",
      description: "Nope",
    },

    {
      collection: "Personal",
      src: "/7AR09789.jpg",
      description: "Yes",
    },
    {
      collection: "Personal",
      src: "/7AR09794.jpg",
      description: "Yes",
    },
    {
      collection: "Personal",
      src: "/L1130265.jpg",
      description: "Yes",
    },
  ];

  /// fonction pour gérer le hover ///
  const hover = (i) => {
    dispatch(display(i));
  };

  /// fonction pour envoyer la collection dans le reducer ////

  const sendAlbumData = (i) => {
    dispatch(generate(i));
    console.log(albumData);
  };

  return (
    <>
      {albumData.map((data, i) => (
        <div className={styles.picContainer}>
          <Link href="slider">
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
                // voir la photo qui est cliquée //
                console.log(data);
                /// Envoie le tableau avec toute la collection
                const keyword = data.collection;
                const searchResult = imagesData.filter(
                  (word) => word.collection.indexOf(keyword) > -1
                );
                sendAlbumData(searchResult);
              }}
              src={data.src}
              description={data.description}
              collection={data.collection}
              className={styles.pic}
            />
          </Link>
        </div>
      ))}
    </>
  );
};

export default AutoImages;
