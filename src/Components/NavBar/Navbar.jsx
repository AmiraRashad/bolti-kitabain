import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Button } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Link } from "react-router-dom";
import "../../index.js";
import "../../index.css";
import { useStyles } from "./styles";

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={6} md={6}>
          <AppBar elevation={0} className={classes.appbar}>
            <Toolbar className={classes.maintoolbar}>
              <Link to="/audioplayer">
                <Button className={classes.toolbar} color="inherit">
                  Library
                </Button>
              </Link>
              <Button className={classes.toolbar} color="inherit">
                My Books
              </Button>
              <div style={{ flexGrow: 1 }}>
                <Button className={classes.toolbar} color="inherit">
                  Contact Us
                </Button>
              </div>
              <Link to="/signin">
                <Button
                  style={{ fontWeight: 400 }}
                  className={classes.toolbar2}
                  color="inherit"
                >
                  Sign In
                </Button>
              </Link>
              <Link to="/signup">
                <Button
                  style={{ marginRight: 180 }}
                  className={classes.toolbar2}
                  color="inherit"
                >
                  {" "}
                  Sign Up
                </Button>
              </Link>
            </Toolbar>
          </AppBar>
        </Grid>
      </Grid>
    </div>
  );
};
export default NavBar;
