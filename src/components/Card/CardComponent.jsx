import React from "react";
import { useState } from "react";
// import image from "../../assets/monk.jpg";
import styles from "../Button/ButtonComponent.module.css";
import Button from "../Button/ButtonComponent.jsx";
import "../../App.css";
function Card(props) {
  const [flipped, setFlipped] = useState(false);

  function handleClick() {
    if (!flipped) {
      setFlipped(true);
    } else {
      setFlipped(false);
    }
  }

  return (
    <div className={styles.mainDiv}>
      {!flipped && (
        <article onClick={handleClick} className="card-item">
          <img className="card-image" src={props.image} />
          <h2>
            {props.firstName} {props.lastName}
          </h2>
          <h3>{props.profession}</h3>
          <p>{props.text} </p>
          <Button />
          <div className={styles.mainButton}></div>
        </article>
      )}{" "}
      :
      {flipped && (
        <article onClick={handleClick} className="card-item">
          <h2>
            {props.firstName} {props.lastName}
          </h2>
          <h3>{props.profession}</h3>
          <p>{props.info} </p>
          <Button />
          <div className={styles.mainButton}></div>
        </article>
      )}
    </div>
  );
}

export default Card;
