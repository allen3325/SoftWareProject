import * as React from 'react';
import { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import { Grid } from '@material-ui/core';

const CalenderSearchPage = () => {
    const [value, setValue] = React.useState(new Date());

    let fetchDiaryAlready = true;

    useEffect(() => {
        fetchDiaryAlready = false;
        fetchDiary()
    },[]);


    const fetchDiary = () => {
        fetchDiaryAlready = true;
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
                    <h1>{value.toDateString()}</h1>
                </Grid>
                <Grid item>
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
            </Grid>
        </div>
    )
}

export default CalenderSearchPage;