import { Fragment, useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import FolderList from "./FolderList";
import AddIcon from '@mui/icons-material/Add';
import axios from "../axios/axios"
 
const FolderPage = (props) => {
  const email = "allen3325940072@gmail.com";
  const [folder, setFolder] = useState([]);
  const [hasUpper, setHasUpper] = useState(0);
  useEffect(() => {
    // console.log(props.folder);
    if (props.hasUpper !== undefined && props.hasUpper) {
      setHasUpper(true);
      setFolder(props.folder);
    }
    else {
      setHasUpper(false);
      axios
      .get("/user/" + email + "/folder")
      .then((res) => {
        // console.log(res.data);
        setFolder(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }, [props.folder, props.hasUpper]);
  
  const handleFolderChange = (e) => {
    props.onChangeFolder(e); //e is folderName (in folderlist: props.folderName)
  };
  const ignoreHandleFolderChange = (e) => {};

  return (
    <>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {folder.map((fold, index) => {
          return (
            <Fragment key={fold._id} >
              {hasUpper ?
                <FolderList  folderName={fold.folderName} folderIdx={index} onChangeFolder={handleFolderChange} />
                :
              <FolderList  folderName={fold.folderName} folderIdx={index} onChangeFolder={ignoreHandleFolderChange}/>
              }
              <Divider />
            </Fragment>
          );
        })}
        <ListItem>
          <ListItemButton inset={"true"}>
            <ListItemIcon><AddIcon/></ListItemIcon>
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );
};

export default FolderPage;
