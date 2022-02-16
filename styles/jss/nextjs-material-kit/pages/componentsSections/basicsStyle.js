import { container, title } from "styles/jss/nextjs-material-kit.js";
import customCheckboxRadioSwitch from "styles/jss/nextjs-material-kit/customCheckboxRadioSwitch.js";

const basicsStyle = {
  sections: {
    padding: "70px 0",
  },
  container,
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
  },
  space50: {
    height: "50px",
    display: "block",
  },
  space70: {
    height: "70px",
    display: "block",
  },
  mainRaised: {
    //margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 10px 10px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    "@media (max-width: 830px)": {
      marginLeft: "10px",
      marginRight: "10px",
    },
  },
  navLink: {
    color: "#6231ec",
    position: "relative",
    padding: "0.9375rem",
    fontWeight: "bold",
    fontSize: "18px",
    textTransform: "capitalize",
    borderRadius: "3px",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
    "&:hover,&:focus": {
      color: "inherit",
      background: "rgba(200, 200, 200, 0.2)",
    },
  },
  dropdownLink: {
    "&,&:hover,&:focus": {
      color: "inherit",
      textDecoration: "none",
      display: "block",
      padding: "10px 20px",
    },
  },
  icons: {
    width: "17px",
    height: "17px",
    color: "#FFFFFF",
  },
  ...customCheckboxRadioSwitch,
};

export default basicsStyle;
