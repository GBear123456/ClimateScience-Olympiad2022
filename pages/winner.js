import React, { useEffect, useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
import FollowsUpSection from "../pages-sections/FollowsUpSection";
import WinnerSection from "../pages-sections/winner-sections/WinnerSection";
import MeetSection from "../pages-sections/winner-sections/MeetSection";

import styles from "styles/jss/nextjs-material-kit/pages/components.js";

const useStyles = makeStyles(styles);
export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;

  useEffect((props) => {
    console.log("CLASSES=>", props);
  }, []);

  return (
    <div>
      <Header
        brand=""
        rightLinks={<HeaderLinks />}
        fixed
        color= "white"//"transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax image="/img/images/winner.png" style={{marginTop:'70px'}}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>{'CSO21 Winners'}</h1>
                <br/>
                <h4 className={classes.subtitle}>{"Meet the winners of the ClimateScience Olympiad 2021"}</h4>
                <br/>
                <br/>
                <Button color="purple2" round style={{background:"#6231ec", fontWeight:'bold', textTransform:'capitalize', fontSize:'18px'}}>
                  {"Participate now >"}
                </Button>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main)}>
        <WinnerSection />
        <MeetSection />
        <FollowsUpSection />
        </div>
      <Footer />
    </div>
  );
}
