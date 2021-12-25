import "./LoginPage.css";
import React from "react";
import { Button, Paper } from "@mui/material";
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import axios from "../axios/axios";
// import RegisterPage from "./RegisterPage/RegisterPage";

// const TOKEN_KEY ='AS_MALL_ACCESS_TOKEN';
// axios.defaults.headers.common['Authorization']=localStorage.getItem(TOKEN_KEY);
function LoginPage() {
  let email="";
  let password="";
  const handleEmailChange=(event)=>{
    email = (event.target.value);
    console.log(email);
  }
  const handlePasswordChange =(event) => {
    password = (event.target.value);
    console.log(password);
  }
  
  const login = (event) =>{
    console.log("email="+email);
    console.log("password="+password);
        axios.post("/login",{
          email:email,
          password:password
        })
          .then(res=>
        {
            
            console.log("success");
            console.log(res);
            // window.localStorage.setItem("token",res.data.token);
          }
        ).catch((error)=> console.log(error))
 }
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log("data is "+data.toString())
  //   // eslint-disable-next-line no-console
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //     remeber: data.get('password'),
  //   });
  // };
  
  return (
    <Paper elevation={0} style={{height:"100vh"}} className="login_page">
      <p> MyDiary </p> {""}{" "}
      
      <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar> */}
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          {/* <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}> */}
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleEmailChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handlePasswordChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              // href="/"
              onClick={login}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/forgotpassword" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          {/* </Box> */}
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
    </Paper>
  );
}

export default LoginPage;
