import Image from "next/image";
import React from "react";

import styles from "./page3.module.css";

export default function Page3() {
  return (
    <div className={styles.container}>
      <h1>Pon Guide 101</h1>
      <div className={styles.imgContainer}>
        <Image
          className={styles.image}
          src="/assets/guide.jpg"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
}
