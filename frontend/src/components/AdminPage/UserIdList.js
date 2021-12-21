
import { IconButton } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { ListItemSecondaryAction } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";

function UserListPage(props) {
  return (
    <ListItem alignItems="center">
      <ListItemText edge="start" primary={props.index} />
      <ListItemText primary={props.name} />
      <ListItemIcon>
        <ListItemText primary={props.total} />
      </ListItemIcon>
      <ListItemIcon>
        <IconButton>
          <VisibilityIcon />
        </IconButton>
    </ListItemIcon>
    </ListItem>
  );
}

export default UserListPage;
