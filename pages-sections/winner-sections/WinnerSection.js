import React, { useEffect } from "react";
import classNames from "classnames";
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import Switch from "@material-ui/core/Switch";
import { Slide } from "@material-ui/core";

import Fade from "@material-ui/core/Fade";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import People from "@material-ui/icons/People";
import Check from "@material-ui/icons/Check";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.js";
import Paginations from "components/Pagination/Pagination.js";
import Badge from "components/Badge/Badge.js";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import ReactPlayer from "react-player";

import styles from "styles/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";

const useStyles = makeStyles(styles);

// const PartnerGroup = (props) => {
//     let cnt = props.memberCount;
//     let array = Array.from(Array(cnt).keys())
//     return <GridContainer>
//     {
//         array.map((data, index) => {
//             return (
//                 <GridItem xs={12} sm={6} md={3} className={props.classes.marginLeft} 
//                     style={{textAlign:'center', color:"#6231ec", marginLeft:'auto', marginRight:'auto'}}>
//                     <img
//                         src="/img/images/circle_image.png"
//                         alt="..."
//                         className={props.classes.imgRoundedCircle + " " + props.classes.imgFluid}
//                     />
//                     <p style={{fontSize:'18px', color: props.backColor === "white" ? "#6231ec" : "white"}}>
//                         <b>Sophie Gallois</b>
//                     </p>
//                     <p style={{color: props.backColor === "white" ? "#6231ec" : "white"}}>
//                         Former Deputy Exec. Director at Unicef UK
//                     </p>
//                 </GridItem>
//             )
//         })
//     }
//     </GridContainer>
// }


export default function WinnerSection(props) {
  const classes = useStyles();

  return (
    <div className={classes.sections}  style={{backgroundColor:"#6231ec", color:"white", paddingBottom: "350px"}}>
      <div className={classes.container}>
        <div className={classes.title} style={{backgroundColor:"#6231ec", color:"white"}}>
          <h1 style={{fontWeight:'bold', textAlign:'center'}}>{"1st Place"}</h1>
          <h3 style={{textAlign:'center'}}>
          Alexandra and Eleonore won the CSO21 with their inspiring proposal on a 
          <br/>
          <b>‘Global Carbon Tax Scheme’</b>
          </h3>
        </div>
        <br/>
        <br/>
        <br/>
        <div id="buttons">
            <GridContainer justify="center">
                <GridItem xs={12} sm={4} md={4} 
                    style={{textAlign:'center', color:"#6231ec", marginLeft:'auto', marginRight:'auto'}}>
                    <img
                        src="/img/images/Vecchioli.png"
                        alt="..."
                        className={classes.imgRoundedCircle + " " + classes.imgFluid}
                    />
                    <h3 style={{ color: "white"}}>
                        <b>Eleonore Vecchioli</b>
                    </h3>
                    <p style={{fontSize:'18px', color: "white"}}>
                        Aged 14, UK
                    </p>
                </GridItem>
                <GridItem xs={12} sm={8} md={8} 
                    style={{textAlign:'left', color:"#6231ec", marginLeft:'auto', marginRight:'auto'}}>
                    <p style={{color: "white", marginTop:'0px', fontSize:'25px', lineHeight:1.3}}>
                        <b>“The CSO is an unrivalled opportunity to develop your environmental knowledge and meet people with similar interests. It asks you to think beyond the traditional curriculum and gives you a glimpse into the decisions world leaders have to make about the climate. </b>
                        <br/>
                        <br/>
                        <b>The CSO will stretch your environmental knowledge and enable you to become a better essay writer and scientist.”</b>
                    </p>
                </GridItem>
            </GridContainer>
            <GridContainer justify="center" style={{marginTop:'100px'}}>
                <GridItem xs={12} sm={4} md={4} 
                    style={{textAlign:'center', color:"#6231ec", margin:'auto'}}>
                    <img
                        src="/img/images/Pilz.png"
                        alt="..."
                        className={classes.imgRoundedCircle + " " + classes.imgFluid}
                    />
                    <h3 style={{ color: "white"}}>
                        <b>Alexandra Pilz</b>
                    </h3>
                    <p style={{fontSize:'18px', color: "white"}}>
                        Aged 14, UK
                    </p>
                </GridItem>
                <GridItem xs={12} sm={8} md={8} 
                    style={{textAlign:'left', color:"#6231ec", margin:'auto'}}>
                    <p style={{color: "white", marginTop:'0px', fontSize:'25px', lineHeight:1.3}}>
                        <b>“Winning the ClimateScience Olympiad was so exciting. We thank ClimateScience for the opportunity and for the amazing community that was created out of the competion. </b>
                        <br/>
                        <br/>
                        <b>My advice to anyone applying in 2022 would be to make sure you answer the question and, most importantly, have fun!”</b>
                    </p>
                </GridItem>
            </GridContainer>
        </div>
      </div>
    </div>
  );
}
