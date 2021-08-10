import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Button } from "@material-ui/core";
import { Link, Route, Switch } from "react-router-dom";
import { Form, Nav, Navbar } from "react-bootstrap";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Popularbooks from "./PopularBooks";
import "./index.js";
import "./index.css";
import { auto } from "@popperjs/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 30,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  fontname: {
    fontFamily: "Roboto",
  },
  fontname2: {
    fontFamily: "Hk",
  },
  text1: {
    marginTop: 100,
    marginLeft: 50,
  },
  getstarted: {
    backgroundColor: "#3CBFD4",
    color: "white",
    fontFamily: "Hk",
    "&:hover": {
      backgroundColor: "#33a1b2",
    },
  },
  appbar: {
    backgroundColor: "transparent",
  },
  maintoolbar: {
    marginLeft: 45,
  },
  toolbar: {
    color: "black",
    "&:hover": {
      backgroundColor: "white",
      color: "#33a1b2",
    },
  },
  toolbar2: {
    color: "black",
    "&:hover": {
      backgroundColor: "#85D7ED",
      color: "white",
    },
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div
      style={{
        backgroundImage: `url("images/landingpage.jpg")`,
        flex: 1,
        backgroundSize: "100% auto",
        resizeMode: "contain",
        backgroundAttachment: "cover",
        backgroundRepeat: "no-repeat",
        justifyContent: "center",
        alignItems: "center",
      }}
      className={classes.root}
    >
      <Grid container>
        <Grid className={classes.text1} item xs={12} md={6}>
          <Typography variant="h2" className={classes.fontname}>
            بولتی کتابیں<br></br>
          </Typography>
          <Typography
            style={{ marginTop: 22, fontSize: 22 }}
            paragraph
            component="div"
            className={classes.fontname2}
          >
            Experience the Best Audio Listening Platform With <br></br> "BOLTI
            KITAABAIN" and Enjoy Listening to Your <br></br> Favorite Books,
            "Anywhere Anytime".
          </Typography>
          <Typography
            style={{ fontSize: 18 }}
            paragraph
            component="div"
            className={classes.powered}
          >
            <i>Powered by PITB</i>
          </Typography>
          <Button className={classes.getstarted} variant="contained">
            Get Started
          </Button>
        </Grid>
      </Grid>

      <Popularbooks />
    </div>
  );
}
