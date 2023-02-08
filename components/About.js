import React from "react";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div>
      <div className={styles.title}>À PROPOS</div>;
      <div className={styles.textContainer}>
        <div className={styles.text}>
          Rachel de Joode (1979, NL) lives and works in Berlin
          <span className={styles.plus}>+</span> De Joode earned her diploma in
          time-based art from the Gerrit Rietveld Academie in Amsterdam
          <br />
          <span className={styles.plus}>+</span>
          She was awarded the Deutsche Börse Residency at the Frankfurter
          Kunstverein in Frankfurt (2013) and the Sculpture Space residency
          (2012), as well as a residency at LMCC Governors Island (2013 – 2014)
          in New York
          <span className={styles.plus}>+</span> She has received funding from
          the Mondriaan fund, the Berliner Senat, the Prins Bernhard Cultuur
          Fonds and the Royal Dutch Embassy{" "}
          <span className={styles.plus}>+</span>
        </div>
      </div>
      ;
    </div>
  );
}
