import React from "react";

// styles and images
import { ReactComponent as GradCap } from "assets/img/icons/grad-cap.svg";
import styles from "./features.module.css";

const FeatureItem = (props) => {
  const {icon, text} = props;
  return (
    <div className={styles.featureItem}>
      <div className={styles.featureIcon}>
        {icon}
      </div>
      <span>{text}</span>
    </div>
  );
};

export default FeatureItem;
