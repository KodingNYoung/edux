import React from "react";

// images and styles
import styles from "./partners.module.css";
import bancore from "assets/img/partners/bancore.png";
import k386 from "assets/img/partners/386.png";
import yps from "assets/img/partners/yps.png";
import line3 from "assets/img/partners/3line.png";
import fuse from "assets/img/partners/fuse.png";
import appzone from "assets/img/partners/appzone.png";
import smartcomply from "assets/img/partners/smart.png";
import coble from "assets/img/partners/coble.png";

const Partners = () => {
  return (
    <div className={`${styles.partners} container`}>
      <h1>In Partnership with</h1>
      <div className={styles.partnersGrid}>
        <img src={bancore} />
        <img src={k386} />
        <img src={yps} />
        <img src={line3} />
        <img src={fuse} />
        <img src={appzone} />
        <img src={smartcomply} />
        <img src={coble} />
      </div>
    </div>
  );
};

export default Partners;
