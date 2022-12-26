import styles from "../styles/HomeImages.module.css";
import { useState } from "react";
function Image(props) {
  const [hover, setHover] = useState(false);

  const text = {
    fontFamily: "FreeSansBold",
    opacity: hover ? 0 : 1,
  };

  function handleClick(e) {
    console.dir(e.target);
    setHover(!hover);
  }
  return (
    <div>
      <img
        className={styles.pic}
        collection={props.collection}
        onClick={(e) => handleClick(e)}
        // onClick={props.Onclick}
        src={props.src}
      />
      <p style={text}> {props.description}</p>
    </div>
  );
}

export default Image;
