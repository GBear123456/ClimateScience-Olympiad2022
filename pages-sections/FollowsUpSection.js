import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Small from "components/Typography/Small.js";
import Danger from "components/Typography/Danger.js";
import Warning from "components/Typography/Warning.js";
import Success from "components/Typography/Success.js";
import Info from "components/Typography/Info.js";
import Primary from "components/Typography/Primary.js";
import Muted from "components/Typography/Muted.js";
import Quote from "components/Typography/Quote.js";
import styles from "styles/jss/nextjs-material-kit/pages/componentsSections/typographyStyle.js";
import { Link } from "@material-ui/core";
import Button from "components/CustomButtons/Button.js";


const useStyles = makeStyles(styles);

export default function FollowsUpSection() {
    const classes = useStyles();
    return (
        <div
            xs={12} sm={12} md={12} justify="center"
            style={{ backgroundColor: "#6231ec", marginTop:'-25px', alignItems:'center', paddingBottom:'50px'}}
        >
            <div className={classes.title} justify='center'>
                <h2 style={{textAlign:'center', color:'white', fontWeight:'bold', paddingTop:'50px'}}>
                    Follow us for updates
                </h2>
            </div>
            <div className={classes.title} justify='center' style={{marginLeft:'auto', marginRight:'auto', display:'flex'}}>
                <img className="d-block mx-auto img-fluid w-50" 
                    style={{marginRight:'auto', marginLeft:'auto', display:'block'}}
                    src="/img/images/Frame.png" alt="requirements"
                />
            </div>
            <div className={classes.title} justify='center'>
                <h3 style={{color:'white', textAlign:'center', color: 'white'}}>
                    @climatescienceolympiad
                </h3>
            </div>
        </div>
    )
}
