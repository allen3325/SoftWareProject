import React, { useEffect, useState } from "react"
import { Grid, TextField } from "@mui/material";
import DatePicker from "./DatePicker";
import FolderChoose from "./FolderChoose";
import TextArea from "./TextArea";
import UploadButton from "./UploadButton";
import { Button } from "@material-ui/core";
import { ButtonGroup } from "@mui/material";
import axios from "../axios/axios"

const NewDiaryPage = () => {
    //TODO: fileUpload's loading and more UX
    let title = "";
    let date = new Date();
    let folder = "";
    let content = "";
    let tagsString = "";
    let tags = [];
    let data = new FormData();
    let picUrl = [];
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
    const handleTagsChange = (event) => {
        tagsString = event.target.value;
    }
    const uploadFile = (enteredFile) => {
        data.append("myfile", enteredFile);
        axios.post("/fileupload", data, {
            headers: { 'Content-Type': 'multipart/form-data' }
        })
            .then(response => {
                console.log(response.data.url)
                picUrl.push(response.data.url);
            })
            .catch(error => console.log(error))
    }
    const storeDiary = () => {
        console.log("title is " + title);
        console.log("date is " + date.toISOString());
        console.log("folder is " + folder);
        console.log("content is " + content);
        console.log("tagsString is " + tagsString);
        tags = tagsString.split(",");
        console.log("tags is " + tags[0]);
        console.log(picUrl);
        axios.post('/user/allen3325940072@gmail.com/' + folder, {
            title: title,
            content: content,
            date: date.toISOString(),
            tag: tags,
            filesURL: [],
            picURL: picUrl,
            videoURL: [],
            isFavored: false
        })
            .then((response) => {
                console.log("sucess")
                console.log(response)
            })
            .catch((error) => console.log(error))
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
            <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="flex-start"
                style={{ padding: "0px 0px 20px 0px" }}
            >
                <Grid item xs={1}><p style={{ fontSize: "2.5rem" }}>HashTags</p></Grid>
                <Grid item xs={7}>
                    <TextField fullWidth label="請以,隔開每個hashtag" id="tags" onChange={handleTagsChange} />
                </Grid>
                <Grid item>
                    <ButtonGroup style={{ width: "100%" }} className="ButtonGroup" variant="text">
                        <UploadButton onUploadFile={uploadFile} />
                        <Button variant="contained" component="span" onClick={storeDiary}>儲存日記</Button>
                    </ButtonGroup>
                </Grid>
            </Grid>
        </div>
    )
}

export default NewDiaryPage;