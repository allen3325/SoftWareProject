import { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import FolderList from "./FolderList";
import AddIcon from '@mui/icons-material/Add';
 
const FolderPage = (props) => {
  const [folder, setFolder] = useState([]);
  useEffect(() => {
    console.log(props.folder);
    setFolder(props.folder);
  }, [props.folder]);
  
  const handleFolderChange = (e) => {
    props.onChangeFolder(e); //e is folderName (in folderlist: props.folderName)
  };

  return (
    <>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {folder.map((fold, index) => {
          return (
            <>
              <FolderList key={index} folderName={fold.folderName} folderIdx={index} onChangeFolder={handleFolderChange}/>
              <Divider />
            </>
          );
        })}
        <ListItem>
          <ListItemButton inset>
            <ListItemIcon><AddIcon/></ListItemIcon>
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );
};

export default FolderPage;
