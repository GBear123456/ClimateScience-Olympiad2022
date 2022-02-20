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
import FindingSolutionSection from "pages-sections/home-sections/FindingSolution-Section.js";

import styles from "styles/jss/nextjs-material-kit/pages/components.js";
import RegisterSection from "../pages-sections/home-sections/Register-Section";
import BlueSection from "../pages-sections/home-sections/BlueSection";
import CSOTeamSection from "../pages-sections/home-sections/CSOTeamSection";
import PartnersSection from "../pages-sections/home-sections/PartnersSection";
import JudgesSection from "../pages-sections/team-sections/JudgesSection";
import FollowsUpSection from "../pages-sections/FollowsUpSection";

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
      <Parallax image="/img/images/team.png" style={{marginTop:'70px'}}>
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
                <h1 className={classes.title}>{'Meet the team'}</h1>
                <br/>
                <h4 className={classes.subtitle}>{"The CSO team comprises of passionate volunteers and judges from all around the world."}</h4>
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
        <JudgesSection  
          backColor = {"#6231ec"}
          title={"CSO2022 Finals Judges"} 
          subTitle={"Our judges are trusted members of the climate science industry."} 
          linkText={"Apply here."}
          isApply={false} 
          applyTitle={""} 
          applyDesc={""} 
          applyBtnText={""} 
          memberCount={8}
        />
        <JudgesSection  
          backColor = {"white"}
          title={"CSO22 Pre-final Judges"} 
          subTitle={"Our internal team of experts judge the rounds before the finals"} 
          isApply={true} 
          applyTitle={"Apply to become a judge"} 
          applyDesc={"We’re looking for industry professionals to judge the ClimateScience Olympiad 2022 proposals. If you would like to apply, please fill out our form to register your interest."} 
          applyBtnText={"Apply to become a judge >"} 
          memberCount={8}
        />
        <JudgesSection  
          backColor = {"white"}
          title={"The ClimateScience Olympiad team"} 
          subTitle={"Our internal team of experts judge the rounds before the finals"} 
          isApply={false} 
          applyTitle={""} 
          applyDesc={""} 
          applyBtnText={""} 
          memberCount={16}
        />
        <FollowsUpSection />
      </div>
      <Footer />
    </div>
  );
}
