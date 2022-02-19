import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Search from "@material-ui/icons/Search";
import Email from "@material-ui/icons/Email";
import Face from "@material-ui/icons/Face";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Explore from "@material-ui/icons/Explore";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Header from "components/Header/Header.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "styles/jss/nextjs-material-kit/pages/componentsSections/navbarsStyle.js";

const useStyles = makeStyles(styles);

export default function BlueSection() {
  const classes = useStyles();
  return (
    <div style={{marginTop: "-50px"}}>
      <div id="navbar" className={classes.navbar}>
        <div
            xs={12} sm={12} md={12} justify="center"
            style={{ backgroundColor: "#6231ec", marginTop:'-25px', alignItems:'center', paddingBottom:'50px'}}
        >
            <div className={classes.title} justify='center'>
                <h2 style={{textAlign:'center', color:'white', fontWeight:'bold', paddingTop:'50px'}}>
                    ClimateScience 2021 Winners
                </h2>
            </div>
            <div>
                <h4 style={{color:'white', textAlign:'center', color: 'cyan'}}>
                    <b style={{color:'white'}}>Watch the 2021 ClimateScience Olympiad Awards Ceremony </b>
                    here
                    <br/>
                </h4>
            </div>
            <Button round style={{background:"white", fontWeight:'bold', textTransform:'none', fontSize:'18px',
                    marginRight:'auto', marginLeft:'auto', display:'block', color:"#6231ec" }}>
                {"Meet the CSO21 Winners >"}
            </Button>
        </div>
      </div>
    </div>
  );
}
