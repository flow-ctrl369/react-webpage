import React from "react";
import styles from "./ButtonComponent.module.css";
import { useState } from "react";

function ButtonComponent() {
  const [isActive, setIsActive] = useState(false);

  function handleMoreInfo() {
    if (!isActive) {
      setIsActive(true);
    }
  }

  function handleContact() {
    if (!isActive) {
      setIsActive(true);
      console.log(isActive);
    }
  }

  return (
    <div className={styles.mainButton}>
      <button onClick={handleMoreInfo} className={styles.moreInfo}>
        More Info
      </button>
      <button onClick={handleContact} className={styles.contact}>
        Contact
      </button>
    </div>
  );
}

export default ButtonComponent;
