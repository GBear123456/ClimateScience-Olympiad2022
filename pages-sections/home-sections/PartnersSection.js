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

const BtnGroup = (props) => {
    let array = new Array();
    for(var i = 0; i < props.rows; i++)
    {
        array.push(0);
    }
    console.log("rows", props)
    return <div>
        {
            array.map((data, index) => {
                return <BtnRow key={index} classes={props.classes}/>
            })
        }
    </div>
}

const BtnRow = (classes) =>{
    return (
        <GridContainer justify="center" style={{paddingBottom:'30px'}}>
            <GridItem xs={12} sm={12} md={3}>
                <Button className={classes.marginAuto} style={{display:'block', width:'180px', height:'50px'}}>
                    Partner logo
                </Button>
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
                <Button className={classes.marginAuto} style={{display:'block', width:'180px', height:'50px'}}>
                    Partner logo
                </Button>
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
                <Button className={classes.marginAuto} style={{display:'block', width:'180px', height:'50px'}}>
                    Partner logo
                </Button>
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
                <Button className={classes.marginAuto} style={{display:'block', width:'180px', height:'50px'}}>
                    Partner logo
                </Button>
            </GridItem>
        </GridContainer>
    )
}

export default function PartnersSection() {
  const classes = useStyles();
  const [viewMore, setViewMore] = useState(false);
  const onViewChanged = (e) => {
    setViewMore(!viewMore)
  }

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
            <BtnGroup rows={1} classes={classes}/>
            
            <br />
            {
                viewMore && 
                <div>
                    <div style={{justifyContent:'center', color:"#6231ec", alignItems: 'center', textAlign:'center'}}>
                        <h5>
                            {"Campaign partners"}
                        </h5>
                    </div>
                    <BtnGroup rows={4} classes={classes}/>
                    <div style={{justifyContent:'center', color:"#6231ec", alignItems: 'center', textAlign:'center'}}>
                        <h5>
                            {"Media partners"}
                        </h5>
                    </div>
                    <BtnGroup rows={3} classes={classes}/>
                    <div style={{justifyContent:'center', color:"#6231ec", alignItems: 'center', textAlign:'center'}}>
                        <h5>
                            {"Education partners"}
                        </h5>
                    </div>
                    <BtnGroup rows={3} classes={classes}/>
                    <div style={{justifyContent:'center', color:"#6231ec", alignItems: 'center', textAlign:'center'}}>
                        <h5>
                            {"Organization partners"}
                        </h5>
                    </div>
                    <BtnGroup rows={3} classes={classes}/>
                </div>
            }
            <GridContainer>
                <Button round style={{background:"#6231ec", fontWeight:'bold', textTransform:'none', fontSize:'18px',
                        marginRight:'auto', marginLeft:'auto', display:'block', color:"white" }}
                        onClick={(e)=> onViewChanged(e) }>
                    {"View more"}
                </Button>
            </GridContainer>
        </div>
        <div className={classes.space50} />
      </div>
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
    </div>
  );
}
