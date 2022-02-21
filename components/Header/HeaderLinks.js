/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "styles/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      {/* <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText="Components"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={Apps}
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
      </ListItem> */}
      <ListItem className={classes.listItem}>
        <Button
          href="#"
          color="transparent"
          // target="_blank"
          className={classes.linkTitle}
          style={{textTransform: 'capitalize'}}
        >
          ClimateScience
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/home"
          color="transparent"
          //target="_blank"
          className={classes.linkTitle}
          style={{textTransform: 'capitalize'}}
        >
          Home
        </Button>
      </ListItem>
      <ListItem className={classes.listItem} style={{marginTop: '-14px'}}>
          <img
            src="/img/images/cs_logo.png"
            alt="..."
            className={classes.imgRounded + " " + classes.imgFluid}
          />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/team"
          color="transparent"
          // target="_blank"
          className={classes.linkTitle}
          style={{textTransform: 'capitalize'}}
        >
          {/* <Icon className={classes.icons}>unarchive</Icon>  */}
          Team
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/winner"
          color="transparent"
          // target="_blank"
          className={classes.linkTitle}
          style={{textTransform: 'capitalize'}}
        >
          {/* <CloudDownload className={classes.icons} />  */}
          2021 Winners
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText="English"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={0}
          flagUrl={"img/country/en.png"}
          dropdownList={[
            <Link href="/components">
              <a className={classes.dropdownLink}>English</a>
            </Link>,
            <a
              href="#"
              target="_blank"
              className={classes.dropdownLink}
            >
              Chinese
            </a>,
          ]}
        />
      </ListItem>
    </List>
  );
}
