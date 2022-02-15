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

export default function PartnersSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="images">
            <div style={{justifyContent:'center', color:"#6231ec", alignItems: 'center', textAlign:'center'}}>
                <h2 style={{fontWeight:'bold'}}>Our partners</h2>
                <h5>
                    {"Want to become a CSO partner?"}
                    <Link style={{color:"red"}}>Apply here.</Link>
                </h5>
            </div>
            <br />
            <GridContainer justify="center" style={{paddingBottom:'30px'}}>
                <GridItem xs={12} sm={12} md={3}>
                    <Button className={classes.marginAuto} style={{display:'block'}}>
                        Partner logo
                    </Button>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                    <Button className={classes.marginAuto} style={{display:'block'}}>
                        Partner logo
                    </Button>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                    <Button className={classes.marginAuto} style={{display:'block'}}>
                        Partner logo
                    </Button>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                    <Button className={classes.marginAuto} style={{display:'block'}}>
                        Partner logo
                    </Button>
                </GridItem>
            </GridContainer>
            <GridContainer>
                <Button round style={{background:"#6231ec", fontWeight:'bold', textTransform:'none', fontSize:'18px',
                        marginRight:'auto', marginLeft:'auto', display:'block', color:"white" }}>
                    {"View more"}
                </Button>
            </GridContainer>
        </div>
        <div className={classes.space50} />
      </div>
    </div>
  );
}
