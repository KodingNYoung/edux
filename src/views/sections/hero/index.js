import React from "react";

// app component
import Button from "components/btns/Button";

// sttyles and images
import classes from "./hero.module.css";
import { ReactComponent as HeroImg } from "assets/img/hero.svg";
import { ReactComponent as CGALogo } from "assets/img/brand/cga.svg";

const Hero = () => {
  return (
    <div className={classes.hero}>
      <div className={`${classes.heroContainer} container`}>
        <section className={classes.heroText}>
          <h1 className={classes.textHeader}>
            <span>Learn Smarter.</span>
            <span>Build your dream.</span>
          </h1>
          <p>
            We revolutionalize education by offering virtual courses from top
            universities which gives you the skills you need to pivot and expand
            your career.
          </p>
          <div className="heroBtns">
            <Button
              label="Explore Courses"
              onClick={console.log}
              type="outlined"
            />
            <Button label="About eduX" onClick={console.log} type="link" />
          </div>
          <span className={classes.poweredby}>
            Powered by Codegarage Africa
            <CGALogo />
          </span>
        </section>
        <section className={classes.heroImg}>
          <HeroImg />
        </section>
      </div>
    </div>
  );
};

export default Hero;
