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
  Button,
  IconButton,
} from "@material-ui/core";
import SmallHeader from "./SmallHeader";

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
  let loginOrLogout = props.isLogin ? "登出" : "登入";

  // to recive the param from child
  const changeDarkMode = (enteredDarkMode) => {
    const darkMode = enteredDarkMode;
    props.onChangeDarkMode(enteredDarkMode);
    console.log("In Header is " + darkMode);
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
              alignItems="flex-start"
            >
              <Grid item >
                <MDlogo></MDlogo>
              </Grid>

              <Grid item xs={2} sm={3} md={6}>
                <SearchForm></SearchForm>
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
                </Grid>
                <Grid item>
                  {props.isLogin
                    ?
                    <Button
                      variant="contained"
                      onClick={() => {
                        console.log(props.isLogin);
                      }}
                      href="/logout"
                    >
                      登出
                    </Button>
                    :
                    <Button
                      variant="contained"
                      onClick={() => {
                        console.log(props.isLogin);
                      }}
                      href="/login"
                    >
                      登入
                    </Button>}
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
          <SmallHeader></SmallHeader>
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
};

export default Header;
