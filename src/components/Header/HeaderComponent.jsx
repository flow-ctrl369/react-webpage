import React from "react";
import styles from "./HeaderComponent.module.css";

function HeaderComponent() {
  return (
    <div className={styles.headerDiv}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Jersey+10&family=Outfit:wght@100..900&display=swap"
        rel="stylesheet"
      />
      <h1 className={styles.mainHeader}>Meet The Team!</h1>
    </div>
  );
}

export default HeaderComponent;
