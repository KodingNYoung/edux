import React from "react";
import FeatureItem from "./FeatureItem";

// images and styles
import styles from "./features.module.css";
import { ReactComponent as GradCap } from "assets/img/icons/grad-cap.svg";
import { ReactComponent as Briefcase } from "assets/img/icons/briefcase.svg";
import { ReactComponent as Certificate } from "assets/img/icons/certificate.svg";
import { ReactComponent as Connect } from "assets/img/icons/connect.svg";

const Features = () => {
  const features = [
    {
      id: 0,
      icon: <GradCap />,
      text: "Learn any virtual course of choice at your own pace"
    },
    {
      id: 1,
      icon: <Connect />,
      text: "Connect with mentors to guide you through"
    },
    {
      id: 2,
      icon: <Certificate />,
      text: "Get certification that is accepted round the globe"
    },
    { id: 3, icon: <Briefcase />, text: "Land a job as quickly as possible" }
  ];

  return (
    <section className={`${styles.features} container`}>
      <div className={styles.featuresCard}>
        {features.map(item => {
          return (
            <FeatureItem key={item.id} icon={item.icon} text={item.text} />
          );
        })}
      </div>
    </section>
  );
};

export default Features;
