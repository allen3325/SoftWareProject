import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Container from "@mui/material/Container";
import axios from "../axios/axios";
import { useParams } from "react-router";
import { Navigate } from "react-router-dom";
import "./DiaryPage.css";
import Divider from '@mui/material/Divider';


const EditDiaryPage = () => {
    let { email, inFolder, diaryName } = useParams();
    const [previousDiaryName, setPreviousDiaryName] = useState("");
    const [title, setTitle] = useState("");
    const [date, setDate] = useState(new Date());
    const [folder, setFolder] = useState("");
    const [content, setContent] = useState("");
    const [tag, setTag] = useState([]);
    const [tagsString, setTagsString] = useState("");
    const [filesURL, setFilesURL] = useState([]);
    const [picURL, setPicURL] = useState([]);
    const [videoURL, setVideoURL] = useState([]);
    const [isFavored, setIsFavored] = useState(false);
    const [markdown, setMarkdown] = useState("");
    const [data, setData] = useState(new FormData());
    const [shouldRedirect, setShouldRedirect] = useState(false);

    useEffect(() => {
        // console.log(email + ", " + diaryName + ", " + inFolder);
        setFolder(inFolder);
        setPreviousDiaryName(diaryName);
        setShouldRedirect(false);
        axios
            .get(`/user/${email}/${inFolder}/${diaryName}`)
            .then((res) => {
                res = res.data.diary;
                res.title ? setTitle(res.title) : setTitle("");
                res.date ? setDate(new Date(res.date)) : setDate(new Date());
                setContent(res.content);
                res.tag ? setTag(res.tag) : setTag([]);
                res.tag ? setTagsString("#" + res.tag.join(" #")) : setTagsString("");
                res.filesURL ? setFilesURL(res.filesURL) : setFilesURL([]);
                res.picURL ? setPicURL(res.picURL) : setPicURL([]);
                res.videoURL ? setVideoURL(res.videoURL) : setVideoURL([]);
                res.isFavored ? setIsFavored(res.isFavored) : setIsFavored(false);
                res.markdown ? setMarkdown(res.markdown) : setMarkdown("");
                // console.log(res.tag)
            })
            .catch((err) => {
                console.log(err);
            });
        // setTagsString("#" + tag.join(" #"));
        // console.log("str"+tagsString);
    }, []);

    useEffect(() => setShouldRedirect(false), [shouldRedirect]);

    return shouldRedirect ? (
        <Navigate to={`/DiaryPage/${email}/${folder}/${title}`} />
    ) : (
        <Container maxWidth={"lg"}>
            <div>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-around"
                    alignItems="flex-start"
                    style={{ padding: "0px 0px 20px 0px" }}
                >
                    <Grid item xs={2}>
                        <p>Title: </p>
                    </Grid>
                    <Grid item xs={10}>
                        <p>{title}</p>
                    </Grid>
                </Grid>
                <Divider sx={{
                    bgcolor: 'primary.main',
                }} />

                <Grid
                    container
                    direction="row"
                    justifyContent="space-around"
                    alignItems="flex-start"
                    style={{ padding: "0px 0px 20px 0px" }}
                >
                    <Grid item xs={2}>
                        <p>Date: </p>
                    </Grid>
                    <Grid item xs={4}>
                        <p>{date.toDateString()}</p>
                    </Grid>
                    <Grid item xs={2}>
                        <p>folder: </p>
                    </Grid>
                    <Grid item xs={4}>
                        <p>{folder}</p>
                    </Grid>
                </Grid>
                <Divider sx={{
                    bgcolor: 'primary.main',
                }} />
                <Grid><p>Content:</p><br /></Grid>
                <Grid>
                    {/* {markdown} */}
                    <div dangerouslySetInnerHTML={{ __html: markdown }} />
                </Grid>
                <Divider sx={{
                    bgcolor: 'primary.main',
                }} />
                <Grid
                    container
                    direction="row"
                    justifyContent="space-around"
                    alignItems="flex-start"
                    style={{ padding: "0px 0px 20px 0px" }}
                >
                    <Grid item xs={1}><p>HashTags:</p></Grid>
                    <Grid item xs={7}>
                        <p>{tagsString}</p>
                    </Grid>
                </Grid>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-around"
                    alignItems="flex-start"
                    style={{ padding: "0px 0px 20px 0px" }}
                >
                    {/* <Grid item xs={1}><p style={{ fontSize: "2.5rem" }}>files:</p></Grid>
                    <Grid item xs={7}>
                        <p>{props.files}</p>
                    </Grid> */}
                </Grid>
            </div>
        </Container>
    );
};

export default EditDiaryPage;