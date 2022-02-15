import React from "react";
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

export default function CSOTeamSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="images">
            <div style={{justifyContent:'center', color:"#6231ec", alignItems: 'center', textAlign:'center'}}>
                <h2 style={{fontWeight:'bold'}}>CSO22 Judges</h2>
                <h5>
                    {"Our judges are trusted members of the climate science industry."}
                    <br/>
                    {"Interested in becoming a CSO judge? "}
                    <Link style={{color:"red"}}>Apply here.</Link>
                </h5>
            </div>
            <br />
            <GridContainer>
                <GridItem xs={12} sm={2} className={classes.marginLeft} 
                    style={{textAlign:'center', color:"#6231ec", marginLeft:'auto', marginRight:'auto'}}>
                    <img
                        src="/img/images/circle_image.png"
                        alt="..."
                        className={classes.imgRoundedCircle + " " + classes.imgFluid}
                    />
                    <p style={{fontSize:'18px'}}>
                        <b>Sophie Gallois</b>
                    </p>
                    <p>
                        Former Deputy Exec. Director at Unicef UK
                    </p>
                </GridItem>
                <GridItem xs={12} sm={2} className={classes.marginLeft} 
                    style={{textAlign:'center', color:"#6231ec", marginLeft:'auto', marginRight:'auto'}}>
                    <img
                        src="/img/images/circle_image.png"
                        alt="..."
                        className={classes.imgRoundedCircle + " " + classes.imgFluid}
                    />
                    <p style={{fontSize:'18px'}}>
                        <b>Sophie Gallois</b>
                    </p>
                    <p>
                        Former Deputy Exec. Director at Unicef UK
                    </p>
                </GridItem>
                <GridItem xs={12} sm={2} className={classes.marginLeft} 
                    style={{textAlign:'center', color:"#6231ec", marginLeft:'auto', marginRight:'auto'}}>
                    <img
                        src="/img/images/circle_image.png"
                        alt="..."
                        className={classes.imgRoundedCircle + " " + classes.imgFluid}
                    />
                    <p style={{fontSize:'18px'}}>
                        <b>Sophie Gallois</b>
                    </p>
                    <p>
                        Former Deputy Exec. Director at Unicef UK
                    </p>
                </GridItem>
                <GridItem xs={12} sm={2} className={classes.marginLeft} 
                    style={{textAlign:'center', color:"#6231ec", marginLeft:'auto', marginRight:'auto'}}>
                    <img
                        src="/img/images/circle_image.png"
                        alt="..."
                        className={classes.imgRoundedCircle + " " + classes.imgFluid}
                    />
                    <p style={{fontSize:'18px'}}>
                        <b>Sophie Gallois</b>
                    </p>
                    <p>
                        Former Deputy Exec. Director at Unicef UK
                    </p>
                </GridItem>
            </GridContainer>
            <GridContainer>
                <Button round style={{background:"#6231ec", fontWeight:'bold', textTransform:'none', fontSize:'18px',
                        marginRight:'auto', marginLeft:'auto', display:'block', color:"white" }}>
                    {"Meet the CSO team >"}
                </Button>
            </GridContainer>
        </div>
        <div className={classes.space50} />
      </div>
    </div>
  );
}
