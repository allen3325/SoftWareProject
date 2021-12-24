// import { Box } from "@material-ui/system";
import Card from "@mui/material/Card";
import { CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import { CardActions } from "@mui/material";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";


export default function BasicCard(props) {
    const email = "allen3325940072@gmail.com";

    return (
        <Card variant="outlined" sx={{ minWidth: 275,padding: "0.5rem" }}>
            <CardContent>
                <Typography variant="h5" component="div" >
                    {props.items.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {props.items.date}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {props.items.tag}
                </Typography>
                <Typography variant="body2">
                    {props.items.content}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small"><Link to={`/editDiary/${email}/${props.selectedFolder}/${props.items.title}`}>Learn More</Link></Button>
            </CardActions>
        </Card>
    );
}