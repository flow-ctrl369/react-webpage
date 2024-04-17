import React from "react";
// import image from "../../assets/monk.jpg";
import styles from "../Button/ButtonComponent.module.css";
import Button from "../Button/ButtonComponent.jsx";
import "../../App.css";

function Card(props) {
  return (
    <div className={styles.mainDiv}>
      <article className="card-item">
        <img className="card-image" src={props.image} />
        <h2>
          {props.firstName} {props.lastName}
        </h2>
        <h3>{props.profession}</h3>
        <p>{props.text} </p>
        <div className={styles.mainButton}>
          <Button />
        </div>
      </article>
    </div>
  );
}

export default Card;
