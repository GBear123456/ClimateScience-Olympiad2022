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

export default function MeetSection(props) {
  const classes = useStyles();

  return (
    <div className={classes.sections}>
      <div className={classes.container}>
        <div className={classes.title}>
          <ReactPlayer url="https://www.youtube.com/watch?v=eSAar0cCaTA" 
            controls={true}
            width='100%'
            height="500px"
            playing={true}
            loop={true}
            playsinline={true}
            style={{marginTop:'-350px'}}
        />
        </div>
        <div id="buttons">
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={12} className="ml-5" justify="center" style={{padding:'5px 40px'}}>
                <div className={classes.title} justify='center'>
                    <h2 style={{textAlign:'center', color:'#6231ec', fontWeight:'bold'}}>
                        Meet the runners up
                    </h2>
                </div>
                <div>
                    <h4 style={{color:'#6231ec', textAlign:'center', maxWidth:'600px', margin:'auto'}}>
                        {"Both our second and third-place teams proposed strong solutions about the"}
                        <b>{" ‘Adaptation and Sustainable Development of Southeast Asia’"}</b> 
                    </h4>
                </div>
                </GridItem>
            </GridContainer>
            <GridContainer justify="center" style={{color:'#6231ec', textAlign:'center'}} >
                <GridItem xs={12} sm={6} md={6} justify="center" alignItems="center" style={{paddingLeft:'40px',paddingRight:'40px'}}>
                    <div className={classes.title} justify='center'>
                        <h2 style={{textAlign:'center', color:'#6231ec', fontWeight:'bold'}}>
                            2nd Place
                        </h2>
                    </div>
                    <div>
                        <h3>
                            <b>Ella Marga Contreras</b>
                        </h3>
                        <h4>{"Aged XX, Vietnam"}</h4>
                    </div>
                    <div>
                        <h3>
                            <b>Junsoo Chung</b>
                        </h3>
                        <h4>{"Aged XX, Vietnam"}</h4>
                    </div>
                    <h3>-</h3>
                    <div  style={{paddingLeft:'40px',paddingRight:'40px'}}>
                        <h3>
                            <b>Solution</b>
                        </h3>
                        <h4>{"Adaptation and Sustainable Development of Southeast Asia"}</h4>
                    </div>
                </GridItem>
                <GridItem xs={12} sm={6} md={6} justify="center" alignItems="center" style={{paddingLeft:'40px',paddingRight:'40px'}}>
                    <div className={classes.title} justify='center'>
                        <h2 style={{textAlign:'center', color:'#6231ec', fontWeight:'bold'}}>
                            3rd Place
                        </h2>
                    </div>
                    <div>
                        <h3>
                            <b>Anais Chen</b>
                        </h3>
                        <h4>{"Aged XX, Canada"}</h4>
                    </div>
                    <div>
                        <h3>
                            <b>Ariane Desrosiers</b>
                        </h3>
                        <h4>{"Aged XX, Hong Kong"}</h4>
                    </div>
                    <h3>-</h3>
                    <div  style={{paddingLeft:'40px',paddingRight:'40px'}}>
                        <h3>
                            <b>Solution</b>
                        </h3>
                        <h4>{"Adaptation and Sustainable Development of Southeast Asia"}</h4>
                    </div>
                </GridItem>
            </GridContainer>
            <br/><br/><br/>
            <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={12} className="ml-5" justify="center" style={{padding:'5px 40px'}}>
                <div className={classes.title} justify='center'>
                    <h2 style={{textAlign:'center', color:'#6231ec', fontWeight:'bold'}}>
                        Feeling inspired? Participate now!
                    </h2>
                </div>
                <div style={{paddingLeft:'4px', paddingRight:'40px'}}>
                    <h4 style={{color:'#6231ec', textAlign:'center', fontSize:'18px'}}>
                        {"Work on your own, or in pairs, and compete against youths from around the world to find solutions to climate change."}
                        <br/><br/>
                        {"The top 3 teams will win a share of the"}
                        <b> $15,000 </b> 
                        {"prize pool."}
                    </h4>
                </div>
            </GridItem>
          </GridContainer>
          <GridItem xs={12} sm={12} md={12} alignItems={'center'}>
              <Button round style={{background:"#6231ec", fontWeight:'bold', textTransform:'none', fontSize:'18px',
                      marginRight:'auto', marginLeft:'auto', display:'block'}}>
                  {"Participate now >"}
              </Button>
          </GridItem>
        </div>
      </div>
    </div>
  );
}
