import React from "react";
import MovieCard from "../movieCard/MovieCard";
import styles from "./Group.module.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Group({title, headline}) {
  return(
    <div className={styles.body}>
      <h1>{title}<ArrowForwardIcon /></h1>
      <p>{headline}</p>
      <MovieCard movieName="Lucifer" date="25 ene 2016"/>
    </div>

  )
}

export default Group;