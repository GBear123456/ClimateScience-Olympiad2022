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
// sections for this page
//import SectionBasics from "pages-sections/Components-Sections/SectionBasics.js";
import SectionNavbars from "pages-sections/Components-Sections/SectionNavbars.js";
import SectionTabs from "pages-sections/Components-Sections/SectionTabs.js";
import SectionPills from "pages-sections/Components-Sections/SectionPills.js";
import SectionNotifications from "pages-sections/Components-Sections/SectionNotifications.js";
import SectionTypography from "pages-sections/Components-Sections/SectionTypography.js";
import SectionJavascript from "pages-sections/Components-Sections/SectionJavascript.js";
import SectionCarousel from "pages-sections/Components-Sections/SectionCarousel.js";
import SectionCompletedExamples from "pages-sections/Components-Sections/SectionCompletedExamples.js";
import SectionLogin from "pages-sections/Components-Sections/SectionLogin.js";
import SectionExamples from "pages-sections/Components-Sections/SectionExamples.js";
import SectionDownload from "pages-sections/Components-Sections/SectionDownload.js";

import FindingSolutionSection from "pages-sections/home-sections/FindingSolution-Section.js";

import styles from "styles/jss/nextjs-material-kit/pages/components.js";

import Favorite from "@material-ui/icons/Favorite";
import { useFirestore, useSetFirestore } from "../hooks/useFilestore.ts"
import RegisterSection from "../pages-sections/home-sections/Register-Section";
import BlueSection from "../pages-sections/home-sections/BlueSection";
import CSOTeamSection from "../pages-sections/home-sections/CSOTeamSection";
import PartnersSection from "../pages-sections/home-sections/PartnersSection";
import FollowsUpSection from "../pages-sections/FollowsUpSection";
import WinnerSection from "../pages-sections/winner-sections/WinnerSection";
import MeetSection from "../pages-sections/winner-sections/MeetSection";

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
