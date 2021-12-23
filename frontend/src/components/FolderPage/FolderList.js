import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import ListItemText from "@mui/material/ListItemText";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useEffect } from "react";
 
export default function FolderList(props) {
  const handleFolderChange = (e) => {
    e.preventDefault();
    props.onChangeFolder(props.folderIdx);
  }

  return (
    <ListItem 
      onClick={handleFolderChange}
      secondaryAction={
        <IconButton edge="end">
          <MoreHorizIcon />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton>
      <ListItemText primary={props.folderName} />
      </ListItemButton>
    </ListItem>
  );
}
