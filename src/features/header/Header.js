import React from "react";
import styles from "./Header.module.css";
import image from "../../assets/film.svg";

function Header() {
  return(
    <div className={styles.header}>
      <div className={styles.box}>
        <img src={image}></img>
      </div>
      <div className={styles.text}>
        <h1 className={styles.h1}>Xepelin Movie Database</h1>
        <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac accumsan odio. Quisque et felis id magna ultricies.</p>
      </div>
    </div>
  );
}

export default Header;