import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Container from "@mui/material/Container";
import axios from "../axios/axios";
import { useParams } from "react-router";
import { Navigate } from "react-router-dom";
import "../BrowseDiaryPage/DiaryPage.css";

const ShareDiaryPage = () => {
    let path = useParams();
    // const [previousDiaryName, setPreviousDiaryName] = useState("");
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
        console.log(path.path);
        // setFolder(inFolder);
        // setPreviousDiaryName(diaryName);
        // setShouldRedirect(false);
        axios.get(`shareLink/${path.path}`)
            .then(res => {
                console.log(res);
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
            })
            .catch(e => {
                console.log(e);
            })
    }, []);

    useEffect(() => setShouldRedirect(false), [shouldRedirect]);

    return (
        <Container>
            <div className="content">
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
                    <Grid item xs={4}>
                        <p>{folder}</p>
                    </Grid>
                </Grid>
                <Grid><p>Content:</p><br /></Grid>
                <Grid xs={12}>
                    {/* {markdown} */}
                    <div dangerouslySetInnerHTML={{ __html: markdown }} />
                </Grid>
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

export default ShareDiaryPage;