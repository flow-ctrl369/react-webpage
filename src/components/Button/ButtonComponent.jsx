import React from "react";
import styles from "./ButtonComponent.module.css";
import { useState } from "react";

function ButtonComponent() {
  const [cardState, setcardState] = useState(false);

  function handleClick() {
    setcardState(!cardState);
    console.log(cardState);

    if (cardState == true) console.log("true");
  }

  return (
    <div className={styles.mainButton}>
      <button onClick={handleClick} className={styles.moreInfo}>
        More Info
      </button>
      <button onClick={handleClick} className={styles.contact}>
        Contact
      </button>
    </div>
  );
}

export default ButtonComponent;
