import Card from "@mui/material/Card";
import { CardContent, Container, CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import { CardActions } from "@mui/material";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import IconButton from '@mui/material/IconButton';
import { useEffect,useState } from "react";

const SearchCard = (props) => {
    const [url, setURL] = useState("");
    let tmp = "a/";
    useEffect(() => {
        tmp += props.items[0].picURL[0];
        tmp = tmp.replace('/file/d/', '/uc?id=');
        tmp = tmp.substring(0, tmp.search('/view'));
        tmp = tmp.replace('a/', '');
        // console.log(tmp);
        setURL(tmp);
    })
    // console.log(props.items[0])
    return (

        // <div>
        //     adas
        // </div>
        <Card variant="outlined" >
            <CardContent>
                <Typography variant="h5" component="div" >
                    {props.items[0].title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary" component={"div"}>
                    {new Date(props.items[0].date).toDateString()}
                </Typography>
                {props.items[0].picURL.length === 0 ? "" : <CardMedia
                    component="img"
                    height="300"
                    image={url}
                    alt={props.items[0].title + "'s picture is dead."}
                />
                }
                <div dangerouslySetInnerHTML={{ __html: props.items[0].markdown }}></div>
            </CardContent>
            <CardActions disableSpacing>
                {/* <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton> */}
                {/* <IconButton onClick={generateLink} aria-label="share">
                    <ShareIcon />
                </IconButton> */}
                {/* <Button size="small">
                    <Link to={`/DiaryPage/${props.email}/${props.selectedFolder}/${props.items.title}`}><p style={{ fontSize: "1rem" }}>See More</p></Link>
                </Button> */}
                {/* <Button size="small">
                    <Link to={`/editDiary/${props.email}/${props.selectedFolder}/${props.items.title}`}><p style={{ fontSize: "1rem" }}>Edit Diary</p></Link>
                </Button> */}
                {/* <Typography color="text.secondary">
                    {props.items.tag.length > 0 && props.items.tag[0].length > 0 ? props.items.tag.join("#") : ""}
                </Typography> */}
            </CardActions>
        </Card>
    );
}
export default SearchCard;