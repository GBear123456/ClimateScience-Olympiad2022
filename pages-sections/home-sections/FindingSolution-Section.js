import React from "react";
// plugin that creates slider
import Slider from "nouislider";
import classNames from "classnames";
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import Switch from "@material-ui/core/Switch";
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

export default function FindingSolutionSection() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([24, 22]);
  const [selectedEnabled, setSelectedEnabled] = React.useState("b");
  const [checkedA, setCheckedA] = React.useState(true);
  const [checkedB, setCheckedB] = React.useState(false);
  React.useEffect(() => {
    
  });
  const handleToggle = (value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  return (
    <div className={classes.sections}>
      <div className={classes.container}>
        <div className={classes.title} style={{color:"#6231ec"}}>
          <h2 style={{fontWeight:'bold'}}>Finding the solutions to climate change</h2>
          <h4 style={{textAlign:'center'}}>
            The ClimateScience Olympiad is a global problem-solving competition that encourages and empowers young people to find solutions to the effects and causes of climate change. 
          </h4>
          <ReactPlayer url="https://www.youtube.com/watch?v=aqz-KE-bpKQ" 
            controls={true}
            width='100%'
            height="500px"
            playing={true}
            loop={true}
            playsinline={true}
            />
        </div>
        <div id="buttons">
            <GridContainer justify="center">
                <GridItem xs={12} sm={6} md={6} justify="center" alignItems="center">
                    <div className={classes.title} style={{alignItems:'center', height: '50px', display:'flex'}}>
                        <img className="d-block mx-auto img-fluid w-50" 
                            style={{marginRight:'auto', marginLeft:'auto', display:'block'}}
                            src="/img/images/requirements.png" alt="requirements"
                        />
                    </div>
                    <div className={classes.title} justify='center'>
                        <h3 style={{textAlign:'center', color:'#6231ec', fontWeight:'bold'}}>
                            Requirements
                        </h3>
                    </div>
                    <div>
                        <p style={{color:'#6231ec', textAlign:'center'}}>
                            <b>Free to enter</b>
                            <br/>
                            {"Age groups: <16, 17-20, 21-25"}
                        </p>
                        <p style={{color:'#6231ec', textAlign:'center'}}>{"Participate solo or in a team of two"}</p>
                    </div>
                </GridItem>
                <GridItem xs={12} sm={6} md={6} justify="center">
                    <div className={classes.title} style={{alignItems:'center', height: '50px', display:'flex'}}>
                        <img className="d-block mx-auto img-fluid w-50" 
                            style={{marginRight:'auto', marginLeft:'auto', display:'block'}}
                            src="/img/images/prizes.png" alt="requirements"
                        />
                    </div>
                    <div className={classes.title} justify='center'>
                        <h3 style={{textAlign:'center', color:'#6231ec', fontWeight:'bold'}}>
                            Prizes
                        </h3>
                    </div>
                    <div>
                        <p style={{color:'#6231ec', textAlign:'center'}}>
                            1st wins $5,000 • 2nd wins $3,000<br/>
                            3rd wins $2,000 • 4-6th win $1,000<br/>
                            7-10th win $500
                        </p>
                        <p style={{color:'#6231ec', textAlign:'center'}}>
                            {"Opportunity to speak at COP27 (TBC)"}
                        </p>
                    </div>
                </GridItem>
            </GridContainer>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={12} alignItems={'center'}>
                    <Button round style={{background:"#6231ec", fontWeight:'bold', textTransform:'none', fontSize:'18px',
                            marginRight:'auto', marginLeft:'auto', display:'block'}}>
                        {"Participate now >"}
                    </Button>
                </GridItem>
            </GridContainer>

            <div className={classes.title}>
            {/* <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={12} alignItems={'center'}> */}
                  <img className="d-block mx-auto img-fluid w-100" fullWidth
                      style={{marginRight:'auto', marginLeft:'auto', display:'block'}}
                      src="/img/images/qualifiers1.png" alt="qualifiers1"
                  />
                  <img className="d-block mx-auto img-fluid w-100" fullWidth
                      style={{marginRight:'auto', marginLeft:'auto', display:'block'}}
                      src="/img/images/qualifiers2.png" alt="qualifiers1"
                  />
                  <img className="d-block mx-auto img-fluid w-100" fullWidth
                      style={{marginRight:'auto', marginLeft:'auto', display:'block'}}
                      src="/img/images/semi_final.png" alt="qualifiers1"
                  />
                  <img className="d-block mx-auto img-fluid w-100" fullWidth
                      style={{marginRight:'auto', marginLeft:'auto', display:'block'}}
                      src="/img/images/final.png" alt="qualifiers1"
                  />
                {/* </GridItem>
            </GridContainer> */}
            </div>
          {/* <div className={classes.title}>
            <h3>
              <small>Pick your color</small>
            </h3>
          </div> */}
          <GridContainer justify="center">
            <GridItem xs={12} sm={6} md={6} className="ml-5" justify="left" style={{padding:'5px 40px'}}>
              <div className={classes.title} justify='center'>
                  <h2 style={{textAlign:'left', color:'#6231ec', fontWeight:'bold'}}>
                      Still not sure what <br/>to expect?
                  </h2>
              </div>
              <div style={{padding:'1px 40px 1px 1px'}}>
                  <p style={{color:'#6231ec', textAlign:'left', fontSize:'16px'}}>
                    {"Visit out participant advice page which has been specifically designed to help you on your journey through the qualifier and quarter finals."}
                  </p>
              </div>
              <Button round style={{background:"#6231ec", fontWeight:'bold', textTransform:'none', fontSize:'18px', display:'block'}}>
                  {"Participate now >"}
              </Button>
            </GridItem>
            <GridItem xs={12} sm={6} md={6} justify="center" 
              className={classNames(classes.title, classes.mainRaised)}
              style={{padding:'5px 40px', border:'10px solid', borderRadius: '80px', borderColor:'rgba(98, 49, 236, 0.05)'}}>
              <div className={classes.title} justify='center'>
                  <h3 style={{textAlign:'center', color:'gray', fontWeight:'bold'}}>
                      Which of the below statements <br/> about electricity is not true?
                  </h3>
              </div>
              <div className={classNames(classes.title, classes.mainRaised)}
                  style={{padding:'5px 40px', border:'10px solid', borderRadius: '80px', borderColor:'rgba(98, 49, 236, 0.02)',
                    display: 'flex', flexDirection: 'row', alignItems:'center'}}
                    justify="center">
                  <div style={{border: '3px solid #6231ec', borderRadius: '30px', width: '30px', height: '30px', minWidth:'30px'}}></div>
                  <div style={{color:'#6231ec', textAlign:'left', fontSize:'18px', fontWeight:'bold', marginLeft:'20px', padding:'0px'}}>
                    {"Electricity is measured in units called watts"}
                  </div>
              </div>
              <div className={classNames(classes.title, classes.mainRaised)}
                  style={{padding:'5px 40px', border:'10px solid', borderRadius: '80px', borderColor:'rgba(98, 49, 236, 0.02)',
                    display: 'flex', flexDirection: 'row', alignItems:'center'}}
                    justify="center">
                  <div style={{border: '3px solid #6231ec', borderRadius: '30px', width: '30px', height: '30px', minWidth:'30px'}}></div>
                  <div style={{color:'#6231ec', textAlign:'left', fontSize:'18px', fontWeight:'bold', marginLeft:'20px', padding:'0px'}}>
                    {"Electricity flows at the speed of light"}
                  </div>
              </div>
              <div className={classNames(classes.title, classes.mainRaised)}
                  style={{padding:'5px 40px', border:'10px solid', borderRadius: '80px', borderColor:'rgba(98, 49, 236, 0.02)',
                    display: 'flex', flexDirection: 'row', alignItems:'center'}}
                    justify="center">
                  <div style={{border: '3px solid #6231ec', borderRadius: '30px', width: '30px', height: '30px', minWidth:'30px'}}></div>
                  <div style={{color:'#6231ec', textAlign:'left', fontSize:'18px', fontWeight:'bold', marginLeft:'20px', padding:'0px'}}>
                    {"Electricity is a primary energy source"}
                  </div>
              </div>
            </GridItem>
          </GridContainer>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6} style={{display:'grid', justifyContent:'flex-end'}}>
              <CustomDropdown
                noLiPadding
                //navDropdown
                buttonText="Frequently asked questions"
                buttonProps={{
                  className: classes.navLink,
                  color: "transparent",
                  textTransform:'capitalize',
                  justifyContent: 'grid'
                }}
                buttonIcon={0}
                dropdownList={[
                  <Link href="/components">
                    <a className={classes.dropdownLink}>All components</a>
                  </Link>,
                  <a
                    href="https://creativetimofficial.github.io/nextjs-material-kit/#/documentation?ref=njsmk-navbar"
                    target="_blank"
                    className={classes.dropdownLink}
                  >
                    Documentation
                  </a>,
                ]}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              
            </GridItem>
          </GridContainer>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={12} className="ml-5" justify="center" style={{padding:'5px 40px'}}>
              <div className={classes.title} justify='center'>
                  <h2 style={{textAlign:'center', color:'#6231ec', fontWeight:'bold'}}>
                      Register now!
                  </h2>
              </div>
              <div style={{padding:'1px 40px 1px 1px'}}>
                  <p style={{color:'#6231ec', textAlign:'center', fontSize:'16px'}}>
                    {"Work on your own, or in pairs, and compete against youths from around the world to find solutions to climate change."}
                    <br/><br/>
                    {"The top 10 teams will win a share of the"}
                    <b> $15,000 </b> 
                    {"prize pool."}
                  </p>
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
