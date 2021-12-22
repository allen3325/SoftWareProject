import React, { useEffect, useState } from "react"
import { Grid } from "@mui/material";
import axios from "../axios/axios";

const DiaryPage = (props) => {
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
                console.log(response)
            })
            .catch((error) => console.log(error))
    }
    return (
        <div>
            <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="flex-start"
                style={{ padding: "0px 0px 20px 0px" }}
            >
                <Grid item xs={2}>
                    <p>Title:</p>
                </Grid>
                <Grid item xs={10}>
                    <p>{props.title}</p>
                </Grid>
            </Grid>

            <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="flex-start"
                style={{ padding: "0px 0px 20px 0px" }}
            >
                <Grid item xs={2}>
                    <p>Date:</p>
                </Grid>
                <Grid item xs={4}>
                    {/* {props.date.toISOString()} */}
                    <p>2011/12/12</p>
                </Grid>
                <Grid item xs={2}>
                    <p>folder:</p>
                </Grid>
                <Grid item xs={4}>
                    <p>{props.folder}</p>
                </Grid>
            </Grid>
            <Grid><p>Content:</p></Grid>
            <Grid>
                {props.content}
            </Grid>
            <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="flex-start"
                style={{ padding: "0px 0px 20px 0px" }}
            >
                <Grid item xs={1}><p style={{ fontSize: "2.5rem" }}>HashTags:</p></Grid>
                <Grid item xs={7}>
                    <p>{props.hashtag}</p>
                </Grid>
            </Grid>
            <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="flex-start"
                style={{ padding: "0px 0px 20px 0px" }}
            >
                <Grid item xs={1}><p style={{ fontSize: "2.5rem" }}>files:</p></Grid>
                <Grid item xs={7}>
                    <p>{props.files}</p>
                </Grid>
            </Grid>
        </div>
    )
}

export default DiaryPage;