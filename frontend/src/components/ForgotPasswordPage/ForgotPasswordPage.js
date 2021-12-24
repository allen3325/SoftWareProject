import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Paper, paperClasses } from '@mui/material';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import axios from '../axios/axios';


export default function ForgotPasswordPage() {
  let email="";
   const handleEmailChange = (event) => {
        email = (event.target.value);
        console.log(email);
  }
  const newPassword =(event) => {
    console.log("email");
      axios.post("/randomPassword",{
        email:email
      })
        .then((response)=>{
            console.log("success")
            console.log(response)
        })
        .catch(error =>console.log(error))
  }

  return (
    <Paper elevation={0} style={{height:"100vh"}} >
		<p> MyDiary </p> {""}{" "}
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          
          <Typography component="h1" variant="h5">
            Send new password
          </Typography>
          <Box component="form" noValidate  sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
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
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={newPassword}
              href='/resetpassword'
            >
              Send
            </Button>
            <Grid container justifyContent="flex-end">
            </Grid>
          </Box>
        </Box>
    </Paper>
  );
}