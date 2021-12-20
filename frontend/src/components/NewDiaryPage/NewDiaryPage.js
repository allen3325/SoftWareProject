import React, { useEffect } from "react"
import { Grid, TextField } from "@mui/material";
import DatePicker from "./DatePicker";
import FolderChoose from "./FolderChoose";
import TextArea from "./TextArea";
import UploadButton from "./UploadButton";
import { Button } from "@material-ui/core";
import { ButtonGroup } from "@mui/material";



const NewDiaryPage = () => {
    //TODO: 日記的tag以及試試看接api
    let title = "";
    let date = new Date();
    let folder = "";
    let content = "";
    const handleTitleChange = (event) => {
        title = (event.target.value);
    }
    const handleDateChange = (enteredDate) => {
        date = enteredDate;
    }
    const handleFolderChange = (enteredFolder) => {
        folder = enteredFolder;
    }
    const handleContentChange = (enteredContent) => {
        content = enteredContent;
    }
    const storeDiary = () => {
        console.log("title is " + title);
        console.log("date is " + date.toTimeString());
        console.log("folder is " + folder);
        console.log("content is " + content);
    }
    return (
        <div>
            <Grid>
                <TextField style={{ padding: "0px 0px 30px 0px", position: "relative", top: "10px" }} fullWidth label="title" id="title" onChange={handleTitleChange} />
            </Grid>
            <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="flex-start"
                style={{ padding: "0px 0px 20px 0px" }}
            >
                <Grid item xs={2}>
                    <DatePicker onChangeDate={handleDateChange} />
                </Grid>
                <Grid item xs={10}>
                    <FolderChoose onChangeFolder={handleFolderChange} />
                </Grid>

            </Grid>
            <Grid><p>Content</p></Grid>
            <Grid>
                <TextArea onChangeContent={handleContentChange} />
            </Grid>
            <Grid>
                <ButtonGroup style={{width:"100%"}} className="ButtonGroup" variant="text">
                    <UploadButton/>
                    <Button Button variant="contained" component="span" onClick={storeDiary}>儲存日記</Button>
                </ButtonGroup>
            </Grid>
        </div >
    )
}

export default NewDiaryPage;