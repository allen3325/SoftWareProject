import * as React from 'react';
import { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import { Grid } from '@material-ui/core';
import axios from '../axios/axios';

const CalenderSearchPage = () => {
    //TODO: show dairyList after choose date
    const [value, setValue] = React.useState(new Date());
    const [fetchDiaryAlready, setFetchDiaryAlready] = React.useState(true);

    useEffect(() => {
        setFetchDiaryAlready(false);
        fetchDiary()
    }, [value]);

    const fetchDiary = () => {
        let date = value.getFullYear().toString() + (value.getMonth() + 1).toString() + value.getDate().toString();
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
                <Grid item>
                    <p>choose one day</p>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
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
                <Grid item>
                    <div id='content'></div>
                </Grid>
            </Grid>
        </div>
    )
}

export default CalenderSearchPage;