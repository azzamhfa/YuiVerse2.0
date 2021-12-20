import Image from "next/image";
import React, { Component } from "react";
import styles from "./page1.module.css";

import Link from "next/link";

export default class Page1 extends Component {
  render() {
    return (
      <div className={styles.container} id="home">
        <div className={styles.navBar}>
          <h4>
            <Link href="#home">
              <a>Home</a>
            </Link>
          </h4>
          <h4>
            <Link href="#biography">
              <a>Biography</a>
            </Link>
          </h4>
          <h4>
            <Link href="#discography">
              <a>Discography</a>
            </Link>
          </h4>
          <h4>
            <Link href="#blogs">
              <a>Blogs</a>
            </Link>
          </h4>
          <h4>
            <Link href="#about">
              <a>About this project</a>
            </Link>
          </h4>
          
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.image}
            src="/assets/cover1.jpg"
            alt="bgImage"
            layout="fill"
          />
        </div>
        <div className={styles.tagLines}>
          <h1>YuiVerse</h1>
          <h2>Kobayashi Yui Promotional Landing Page</h2>
          <small>by @azzamhfa</small>
        </div>

        <div className={styles.cardSec}>
          <div className={styles.card}>
            <img src="/assets/saitama.png" alt="saitama" />
            <h3>Saitama Prefecture</h3>
          </div>
          <div className={styles.card}>
            <span>
              <h1>22</h1>
              <h2>Years Old</h2>
            </span>
            <h4>October 23, 1999</h4>
          </div>
          <div className={styles.card}>
            <span>
              <h1>3</h1>
              <h3>Singles Participation</h3>
            </span>
          </div>
          <div className={styles.card}>
            {/* <img src="./assets/cherry-blossom.png" alt="" /> */}
            <h1>3</h1>
            <span>
              <h3>Sakura Eight</h3>
              <h3>Participation</h3>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
