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

const PartnerGroup = (props) => {
    let cnt = props.memberCount;
    let array = Array.from(Array(cnt).keys())
    return <GridContainer>
    {
        array.map((data, index) => {
            return (
                <GridItem xs={12} sm={6} md={3} className={props.classes.marginLeft} 
                    style={{textAlign:'center', color:"#6231ec", marginLeft:'auto', marginRight:'auto'}}>
                    <img
                        src="/img/images/circle_image.png"
                        alt="..."
                        className={props.classes.imgRoundedCircle + " " + props.classes.imgFluid}
                    />
                    <p style={{fontSize:'18px', color: props.backColor === "white" ? "#6231ec" : "white"}}>
                        <b>Sophie Gallois</b>
                    </p>
                    <p style={{color: props.backColor === "white" ? "#6231ec" : "white"}}>
                        Former Deputy Exec. Director at Unicef UK
                    </p>
                </GridItem>
            )
        })
    }
    </GridContainer>
}

export default function JudgesSection(props) {
  const classes = useStyles();
  return (
    <div className={classes.section} style={{backgroundColor:`${props.backColor}`}}>
      <div className={classes.container}>
        <div id="images">
            <div style={{justifyContent:'center',  color: props.backColor === "white" ? "#6231ec" : "white", alignItems: 'center', textAlign:'center'}}>
                <h2 style={{fontWeight:'bold'}}>{props.title}</h2>
                <h5>
                    {props.subTitle}
                    <br/>
                </h5>
                    {
                        props.linkText !== undefined && props.linkText !== "" &&
                        <h5>
                            {"Interested in becoming a CSO judge? "}
                            <Link style={{color:"cyan"}}>Apply here.</Link>
                        </h5>
                    }
            </div>
            <br />
            <PartnerGroup memberCount={props.memberCount} classes={classes} backColor={props.backColor} />
            {
                props.isApply && 
                <div>
                    <div style={{justifyContent:'center', color:"#6231ec", alignItems: 'center', textAlign:'center'}}>
                        <h2 style={{fontWeight:'bold'}}>{props.applyTitle}</h2>
                        <p style={{ maxWidth:'500px', marginLeft:'auto', marginRight:'auto'}}>
                            {props.applyDesc}
                        </p>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <GridContainer>
                        <Button round style={{background:"#6231ec", fontWeight:'bold', textTransform:'none', fontSize:'18px',
                                marginRight:'auto', marginLeft:'auto', display:'block', color:"white" }}>
                            {props.applyBtnText}
                        </Button>
                    </GridContainer>
                </div>
            }
        </div>
        <div className={classes.space50} />
      </div>
    </div>
  );
}
