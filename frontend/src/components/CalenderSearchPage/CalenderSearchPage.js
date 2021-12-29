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
import Card from '../Cards/Card';
import CookieParser from '../CookieParser/CookieParser';
import { Navigate } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';


const CalenderSearchPage = () => {
    let isLogin = false;
    const [value, setValue] = React.useState(new Date());
    const [diarys, setDiarys] = React.useState([]);
    const [fetchDiaryAlready, setFetchDiaryAlready] = React.useState(true);
    const [redirect, setRedirect] = React.useState(false);

    let tmp = [];
    const cookieParser = new CookieParser(document.cookie);
    useEffect(() => {
        if (cookieParser.getCookieByName('token') == "undefined" ||
            cookieParser.getCookieByName('token') == null ||
            cookieParser.getCookieByName('email') == "undefined" ||
            cookieParser.getCookieByName('email') == null
        ) {
            console.log("fail");
            isLogin = false;
            setRedirect(true);
        }
        else {
            isLogin = true;
            console.log("success");
        }
    }, [])
    useEffect(() => {
        if (isLogin) {
            setFetchDiaryAlready(false);
            fetchDiary();
        }
    }, [value]);

    const fetchDiary = () => {
        let day = "";
        if (value.getDate() < 10) {
            day = "0" + value.getDate().toString();
        } else {
            day = value.getDate().toString();
        }
        let date = value.getFullYear().toString() + (value.getMonth() + 1).toString() + day;
        axios.get("/date/" + cookieParser.getCookieByName('email') + "?date=" + date)
            .then(response => {
                setFetchDiaryAlready(true)
                // console.log(response.data.folderArray.length);

                if (response.data.folderArray.length === 0) {
                    setDiarys("No Diary")
                } else {
                    // console.log(response.data.folderArray)
                    response.data.folderArray.map((folder) => {
                        folder.diary.map(diarys => {
                            // this is use Cards to render Card
                            // tmp.push(<Cards key={diarys.map(diary=>diary._id)} items={diarys} selectedFolder={folder.folderName} />)

                            // this is directly render Card
                            diarys.map(diary => {
                                tmp.push(<Card key={diary._id} selectedFolder={folder.folderName} items={diary} />)
                            })
                        })
                    })
                    setDiarys(tmp)
                }

            })
            .catch(error => console.log(error));
    }

    return (

        <Paper>
            {redirect ? <Navigate to={"/login"} /> : ""}
            <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="flex-start">
                <Grid item xs={12} md={5}>
                    <p>choose one day</p>
                    <LocalizationProvider id='calender' dateAdapter={AdapterDateFns}>
                        <StaticDatePicker
                            // orientation="landscape"
                            allowSameDateSelection={true}
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
                <Grid sx={{ padding: "1rem" }} item xs={12} md={7}>
                    {/* <div id='content'></div> */}
                    {fetchDiaryAlready ? diarys : <CircularProgress color="success" />}
                </Grid>
            </Grid>
        </Paper>
    )
}

export default CalenderSearchPage;