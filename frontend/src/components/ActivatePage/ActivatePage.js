import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Container, Paper } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import axios from "../axios/axios";
import { Alert } from '@mui/material';
import { Snackbar } from '@mui/material';

export default function ActivatePage() {
  const [openFail, setOpenFail] = React.useState(false);
  const [openSuccess, setOpenSuccess] = React.useState(false);
  let email = "";
  let code = "";
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   // eslint-disable-next-line no-console
  //   console.log({
  //     activate_code: data.get('activate_code'),
  //   });
  // };
  const handleEmailChange = (event) => {
    email = (event.target.value);
    console.log(email);
  }
  const handleCodeChange = (event) => {
    code = (event.target.value);
    console.log(code);
  }
  const axverify = () => {
    console.log(email);
    console.log(code);
    axios.post("/verify", {
      "email": email,
      "code": code
    })
      .then((res) => {
        console.log(res)
        setOpenSuccess(true);
      })
      .catch((error) => {
        console.log(error)
        setOpenFail(true)
      })
  }
  const resend = () => {
    if (email != "") {
      axios.post("/resendCode", { email: email })
        .then((response) => {
          console.log(response);
          setOpenSuccess(true);
        })

        .catch(error => console.log(error.response.status))
    } else {
      setOpenFail(true);
    }
  }
  const handleCloseFail = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenFail(false);
  };

  const handleCloseSuccess = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSuccess(false);
  };
  return (
    <Container maxWidth={"sm"}>
      <Paper elevation={0} style={{ height: "100vh" }} >
        {/* <p> MyDiary </p> */}
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

          <Typography component="h1" variant="h5">
            Verification
          </Typography>
          {/* <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}> */}
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="email"
                name="email"
                autoComplete="email"
                onChange={handleEmailChange}
              >
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="activate_code"
                label="activate_codes"
                name="activate_code"
                autoComplete="activate_code"
                onChange={handleCodeChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={axverify}
          >
            Verify
          </Button>
          <Typography component="h1" variant="h5">
            Didn't receive the verification email?
          </Typography>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={resend}
          >
            resend
          </Button>
          <Grid container justifyContent="flex-end">
          </Grid>
        </Box>
        {/* </Box> */}
        <Snackbar open={openFail} autoHideDuration={2000} onClose={handleCloseFail}>
          <Alert onClose={handleCloseFail} severity="error" sx={{ width: '100%' }}>
            error email or error code!!
          </Alert>
        </Snackbar>
        <Snackbar open={openSuccess} autoHideDuration={2000} onClose={handleCloseSuccess}>
          <Alert onClose={handleCloseSuccess} severity="success" sx={{ width: '100%' }}>
            successful verify!
          </Alert>
        </Snackbar>
      </Paper>
    </Container>
  );
}