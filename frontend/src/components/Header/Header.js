import React from "react";
import MDlogo from "./MDlogo";
import ModeSwitch from "./ModeSwitch";
import SearchForm from "./SearchForm";
import "./Header.css";
import AccountCircleSharp from "@material-ui/icons/AccountCircleSharp";
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Grid,
  IconButton,
} from "@material-ui/core";
import SmallHeader from "./SmallHeader";
import LogInOrOutButton from "./LogInOrOutButton";
import { useEffect } from "react";
import CookieParser from "../CookieParser/CookieParser";
import { Button } from "@mui/material";

// to make some scorll effect
function ElevationScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Header = (props) => {
  // to recive the param from child
  const changeDarkMode = (enteredDarkMode) => {
    const darkMode = enteredDarkMode;
    props.onChangeDarkMode(enteredDarkMode);
    console.log("In Header is " + darkMode);
  }
  useEffect(() => {
    let cookieParser = new CookieParser(document.cookie);

    if ((cookieParser.getCookieByName('token') === "undefined") || (cookieParser.getCookieByName('token') === null)) {
      console.log("fail");
    }
    else {
      if (cookieParser.getCookieByName('email') === "undefined") {
        console.log("fail");

      } else {
        console.log("success");
      }
    }
  }, [])
  const showSearchResult = (enteredKeyWord) => {
    props.onShowSearchResult(enteredKeyWord);
  }

  return (
    <React.Fragment>
      <ElevationScroll {...props}>
        <AppBar sx={{
          bgcolor: (theme) => theme.palette.primary.main,
        }} color="primary" position="sticky">
          <Toolbar>
            <Grid
              container
              direction="row"
              justifyContent="space-around"
              alignItems="center"
            >
              <Grid item >
                <MDlogo></MDlogo>
              </Grid>
              <Grid item xs={7} sm={4} md={8}>
                <SearchForm onShowSearchResult={showSearchResult} ></SearchForm>
                {/* <SearchForm ></SearchForm> */}
              </Grid>
              <Grid item>
                <Grid item>
                  <IconButton
                    onClick={() => {
                      console.log("Profile");
                    }}
                    href="/about"
                  >
                    <AccountCircleSharp fontSize="large"></AccountCircleSharp>
                  </IconButton>
                  <ModeSwitch
                    onChangeDarkMode={changeDarkMode}
                  ></ModeSwitch>

                  {/* <Button
                      variant="contained"
                      href="/calenderSearch"
                      size="small">Calender</Button> */}

                </Grid>
                <Grid item>
                  <LogInOrOutButton />
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
          <SmallHeader />
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
};

export default Header;
