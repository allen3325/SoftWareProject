// import { Box } from "@material-ui/system";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import { CardContent, Container, CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import { CardActions } from "@mui/material";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import IconButton from '@mui/material/IconButton';



export default function BasicCard(props) {
    const email = "allen3325940072@gmail.com";
    const [url, setURL] = useState("");
    let tmp = "a/";
    useEffect(() => {
        tmp += props.items.picURL[0];
        tmp = tmp.replace('/file/d/', '/uc?id=');
        tmp = tmp.substring(0, tmp.search('/view'));
        tmp = tmp.replace('a/', '');
        setURL(tmp);
    })

    return (
        <Card variant="outlined" sx={{ minWidth: 275, padding: "0.5rem" }}>
            <CardContent>
                <Typography variant="h5" component="div" >
                    {props.items.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary" component={"div"}>
                    {new Date(props.items.date).toDateString()}
                </Typography>
                {props.items.picURL.length === 0 ? "" : <CardMedia
                    component="img"
                    height="300"
                    image={url}
                    alt={props.items.title + "'s picture is dead."}
                />
                }
                <div dangerouslySetInnerHTML={{ __html: props.items.markdown.substring(0, 20) }}></div>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <Button size="small">
                    <Link to={`/DiaryPage/${email}/${props.selectedFolder}/${props.items.title}`}><p style={{ fontSize: "1rem" }}>See More</p></Link>
                </Button>
                <Button size="small">
                    <Link to={`/editDiary/${email}/${props.selectedFolder}/${props.items.title}`}><p style={{ fontSize: "1rem" }}>Edit Diary</p></Link>
                </Button>
                {/* <Typography color="text.secondary">
                    {props.items.tag.length > 0 && props.items.tag[0].length > 0 ? props.items.tag.join("#") : ""}
                </Typography> */}
            </CardActions>
        </Card>
    );
}