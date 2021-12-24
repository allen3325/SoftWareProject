import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';
import axios from "../axios/axios";


const ResetPasswordPage = () => {
  let email="";
  let password="";
  let newPassword="";
  const handleEmailChange = (event) => {
        email = (event.target.value);
        console.log(email);
  }
  const handlePasswordChange = (event) => {
        password = (event.target.value);
        console.log(password);
  }
  const handleNewPasswordChange = (event) => {
        newPassword = (event.target.value);
        console.log(newPassword);
  }
  const resetPassword = (event) => {
    console.log("email "+email);
    console.log("password "+ password);
        axios.post("/resetPassword",{
            email:email,
            password:password,
			newPassword:newPassword
        })
            .then((response) => {
                console.log(response)
            })
            .catch(error => console.log(error))
    }
  return (
	  
	<Paper elevation={0} style={{height:"100vh"}} >
		<p> MyDiary </p> {""}
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
           Reset Password
          </Typography>
          {/* <Box component="form" noValidate  sx={{ mt: 3 }}> */}
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={handleEmailChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Old Password"
                  type="password"
                  id="password"
                  autoComplete="old_password"
                  onChange={handlePasswordChange}
                />
              </Grid>
			  <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="newPassword"
                  label="New password"
                  type="password"
                  id="newPassword"
                  autoComplete="new_password"
                  onChange={handleNewPasswordChange}
                />
              </Grid>
            </Grid>
            <Button
			   href="/"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={resetPassword}
            >
              Reset Password
            </Button>
          </Box>
        {/* </Box> */}
    </Paper>
  );
}
export default ResetPasswordPage;