import React from "react";
import styles from "./MovieCard.module.css";

function MovieCard({image, movieName, date}) {
  return(
    <div className={styles.movieCard}>
      <img src={image} className={styles.image}/>
      <h3>{movieName}</h3>
      <p>{date}</p>
    </div>

  )
}

export default MovieCard;