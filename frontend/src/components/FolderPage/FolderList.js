import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import ListItemText from "@mui/material/ListItemText";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DeleteOutlineOutlined from '@mui/icons-material/DeleteOutlineOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect } from "react";
 
export default function FolderList(props) {
  const handleFolderChange = (e) => {
    e.preventDefault();
    props.onChangeFolder(props.folderIdx);
  }
  const deleteFolder = (e) => { 
    e.preventDefault();
    props.onDeleteFolder(props.folderName);
  }

  return (
    <ListItem 
      key={props.folderIdx}
      onClick={handleFolderChange}
      secondaryAction={
        <IconButton edge="end" onClick={deleteFolder}>
          <CloseIcon/>
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
