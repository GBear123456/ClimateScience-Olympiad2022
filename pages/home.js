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

import FindingSolutionSection from "pages-sections/home-sections/FindingSolution-Section.js";

import styles from "styles/jss/nextjs-material-kit/pages/components.js";

import Favorite from "@material-ui/icons/Favorite";
import { useFirestore, useSetFirestore } from "../hooks/useFilestore.ts"
import RegisterSection from "../pages-sections/home-sections/Register-Section";
import BlueSection from "../pages-sections/home-sections/BlueSection";
import CSOTeamSection from "../pages-sections/home-sections/CSOTeamSection";
import PartnersSection from "../pages-sections/home-sections/PartnersSection";
import FollowsUpSection from "../pages-sections/FollowsUpSection";
import ScoreCache from "../common/ScoreCache";

const useStyles = makeStyles(styles);
export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const {docs} = useFirestore("test_problems");
  const [questions, setQuestions] = useState([]);

  useEffect((props) => {
    const scores = ScoreCache.getScoreData();
    console.log("CLASSES=>", scores);
  }, []);

  useEffect(() => {
    //console.log("GBear: problems ", docs.length);
    if (docs.length >= 3) {

      const tmp_questions = getRandom(docs, 3); // take random 3 elements in docs array...
      console.log("GBear: problems ", tmp_questions);
      setQuestions(tmp_questions);
    } 
  }, [docs]);

  function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

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
      <Parallax image="/img/images/First.png" style={{marginTop:'70px'}}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                  <div style={{flexDirection:'row', display: 'flex'}}>
                    <h6 style={{border: '1px solid white', borderRadius: '10px', marginRight: '5px', paddingLeft:'10px', paddingRight: '10px'}}>
                        {"AGES <16, 17-20 & 21-25"}
                    </h6>
                    <h6 style={{border: '1px solid white', borderRadius: '10px', marginRight: '5px', paddingLeft:'10px', paddingRight: '10px'}}>
                        {"$15.000 PRIZE POOL"}
                    </h6>
                  </div>
                <h1 className={classes.title}>{'ClimateScience'} <br/> {'Olympiad 2022'}</h1>
                <br/>
                <br/>
                <br/>
                <br/>
                <Button color="purple2" round style={{background:"#6231ec", fontWeight:'bold', textTransform:'capitalize', fontSize:'18px'}}>
                  {"Participate now >"}
                </Button>
                <h3 className={classes.subtitle}>
                  <b>Who is ClimateScience?</b>
                  <br/>
                  <u style={{color: 'cyan'}}>Visit our main website</u> to find out more.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main)}>
        {/* <SectionBasics /> */}
        <FindingSolutionSection questions={questions}/>
        <RegisterSection />
        <BlueSection />
        {/* <SectionNavbars /> */}
        {/* <SectionTabs /> */}
        {/* <SectionPills /> */}
        {/* <SectionNotifications /> */}
        <CSOTeamSection />
        <PartnersSection />
        <FollowsUpSection />
        {/* <SectionTypography /> */}
        {/* <SectionJavascript />
        <SectionCarousel />
        <SectionCompletedExamples />
        <SectionLogin />
        <GridItem md={12} className={classes.textCenter}>
          <Link href="/login">
            <a className={classes.link}>
              <Button color="primary" size="lg" simple>
                View Login Page
              </Button>
            </a>
          </Link>
        </GridItem>
        <SectionExamples />
        <SectionDownload /> */}
        </div>
      <Footer />
    </div>
  );
}
