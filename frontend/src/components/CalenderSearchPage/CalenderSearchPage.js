import * as React from 'react';
import { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import { Grid } from '@material-ui/core';
import axios from '../axios/axios';
import './CalenderSearchPage.css'
import { Paper } from '@mui/material';

const CalenderSearchPage = () => {
    //TODO: show dairyList after choose date
    const [value, setValue] = React.useState(new Date());
    const [fetchDiaryAlready, setFetchDiaryAlready] = React.useState(true);

    useEffect(() => {
        setFetchDiaryAlready(false);
        fetchDiary()
    }, [value]);

    const fetchDiary = () => {
        let day = "";
        if (value.getDate() < 10) {
            day = "0" + value.getDate().toString();
        } else {
            day = value.getDate().toString();
        }
        let date = value.getFullYear().toString() + (value.getMonth() + 1).toString() + day;
        axios.get('/date/allen3325940072@gmail.com?date=' + date)
            .then(response => {
                setFetchDiaryAlready(true);
                console.log(response.data.diaryArray.length);
                if (response.data.diaryArray.length === 0) {
                    document.getElementById("content").innerHTML = "<p>no diary</p>";
                } else {
                    if (!(response.data.diaryArray[0][0].markdown === "")) {
                        document.getElementById("content").innerHTML = response.data.diaryArray[0][0].markdown;
                    } else {
                        document.getElementById("content").innerHTML = "<p>this diary's content is empty</p>";
                    }

                    console.log(response.data.diaryArray[0][0].markdown)
                }

            })
            .catch(error => console.log(error));
        // console.log(date);
    }

    return (
        <Paper
        sx={{
            height:"300rem"
        }}
        >
            <div style={{
                display: 'block',
                height: "100vh",
                textAlign: 'center',
            }}>
                {/* <h1></h1> */}
                <Grid
                    container
                    direction="row"
                    justifyContent="space-around"
                    alignItems="flex-start">
                    <Grid item>

                    </Grid>
                    <Grid item xs={12}>
                        <p>choose one day</p>
                        <LocalizationProvider id='calender' dateAdapter={AdapterDateFns}>
                            <StaticDatePicker
                                orientation="landscape"
                                openTo="day"
                                value={value}
                                onChange={(newValue) => {
                                    setValue(newValue);
                                }}
                                // onChange={selectedDate}
                                toolbarTitle=''
                                loading={!fetchDiaryAlready}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </Grid>
                    <Grid item xs={12}>
                        <div id='content'></div>
                    </Grid>
                </Grid>
            </div>
        </Paper>
    )
}

export default CalenderSearchPage;