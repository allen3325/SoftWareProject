// import { Box } from "@material-ui/system";
import Card from "@mui/material/Card";
import { CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import { CardActions } from "@mui/material";
import { Button } from "@material-ui/core";


export default function BasicCard(props) {
    return (
        <Card variant="outlined" sx={{ minWidth: 275,padding: "0.5rem" }}>
            <CardContent>
                <Typography variant="h5" component="div" >
                    {props.items.Title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {props.items.date}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {props.items.Tag}
                </Typography>
                <Typography variant="body2">
                    {props.items.Content}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}