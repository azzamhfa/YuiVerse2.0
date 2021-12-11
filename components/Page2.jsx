import Image from "next/image";
import React from "react";
import styles from "./page2.module.css";
import Button from "@mui/material/Button";
import TwitterIcon from "@mui/icons-material/Twitter";
// import { DeleteIcon } from "@mui/material/";
export default function Page2() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.credits}>
          <small>© Seed &amp; Flowers, LLC - 2021</small>
        </p>
        <div className={styles.imgContainer2}>
          <Image
            className={styles.image}
            layout="fill"
            src="/assets/pon3.jpg"
          />
        </div>
        <div className={styles.box}>
          <span>
            <img src="/assets/calendar.png" alt="ico" />
            <h4>October 23, 1999</h4>
          </span>
          <span>
            <img src="/assets/location.png" alt="ico" />
            <h4>Saitama Prefecture</h4>
          </span>
          <span>
            <img src="/assets/blood.png" alt="ico" />
            <h4>A</h4>
          </span>
          <span>
            <img src="/assets/height.png" alt="ico" />
            <h4>161 cm</h4>
          </span>
          <span>
            <h4>Lightstick Color : </h4>
            <p>🟨🟦</p>
          </span>
        </div>
      </div>
      <div className={styles.right}>
        <h1>Kobayashi Yui | 小林由依 </h1>
        <h3>Biography</h3>
        <span style={{ marginBottom: "20px" }}>
          Dancing, singing, playing musical instruments, acting, modelling,
          writing-- Kobayashi Yui is a person of many talents. But hidden from
          our sight is the amount of effort she has put into perfecting each of
          these skills. As she continues to set new goals for herself and
          strives to become better, she has grown into her role as a pillar of
          the group. &quotSaitama Mad Dog&quot is what fans call her for her sadistic
          nature on stage, but behind the scenes there is no doubt that she is
          one of the core members who leads the group onward. Yui is currently
          an exclusive model for &quotwith&quot magazine and has had several acting
          roles. She was given the nickname &quotPon Pon&quot on Keyakitte, a nickname
          she repeatedly asked everyone to stop using, but of course it
          backfired… <b>( © Sakuzaka Central ) </b>
        </span>
        <div>
          <h3>Media</h3>
          <div style={{ marginBottom: "20px" }}>
            <Button variant="contained" startIcon={<TwitterIcon />}>
              Delete
            </Button>
            <Button variant="contained" startIcon={<TwitterIcon />}>
              Delete
            </Button>
            <Button variant="contained" startIcon={<TwitterIcon />}>
              Delete
            </Button>
          </div>
        </div>
        <div className={styles.gallery}>
          <h3>Gallery</h3>
          <div style={{ display: "flex" }}>
            <div className={styles.galleryCon}>
              <Image
                className={styles.gallPhoto}
                src="/assets/pon3.jpg"
                layout="fill"
              />
              <p>© Seed &amp; Flowers, LLC - 2021</p>
            </div>
            <div className={styles.galleryCon}>
              <Image
                className={styles.gallPhoto}
                src="/assets/pon3.jpg"
                layout="fill"
              />
              <p>© Seed &amp; Flowers, LLC - 2021</p>
            </div>
            <div className={styles.galleryCon}>
              <Image
                className={styles.gallPhoto}
                src="/assets/pon3.jpg"
                layout="fill"
              />
              <p>© Seed &amp; Flowers, LLC - 2021</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
