import { Fragment, useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import FolderList from "./FolderList";
import AddIcon from "@mui/icons-material/Add";
import axios from "../axios/axios";
import TextField from "@mui/material/TextField";
import { ListItemText } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
const FolderPage = (props) => {
  const email = "allen3325940072@gmail.com";
  const [folder, setFolder] = useState([]);
  const [hasUpper, setHasUpper] = useState(0);
  const [folderAdding, setFolderAdding] = useState(false);
  const [newFolderName, setNewFolderName] = useState("");
  const [reRender, setReRender] = useState(false);
  useEffect(() => { setFolderAdding(false); setReRender(false); }, []);
  function postAddFolder() {
    if (newFolderName === "" || newFolderName === undefined || newFolderName === null || newFolderName.trim() === " ") return;
    axios
      .post(`/user/${email}/folder`, {
        folderName: newFolderName,
      })
      .then((res) => {
        // console.log(res.data);
        setFolder(res.data.log.folder);
        console.log(res.data.log.folder);
        setFolderAdding(false);
        setReRender(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function onDelFolder(folderName) {
    if(folderName === "" || folderName === undefined || folderName===null || folderName.trim()==="") return;
    axios
      .delete(`/user/${email}/${folderName}`)
      .then((res) => {
        console.log(res.data);
        setReRender(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  
  useEffect(() => {
    // console.log(folderAdding);
    setReRender(false);
    if (props.hasUpper !== undefined && props.hasUpper) {
      setHasUpper(true);
    } else {
      setHasUpper(false);
    }
    axios
        .get(`/user/${email}/folder`)
        .then((res) => {
          console.log(res.data);
          setFolder(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
  }, [props.folder, props.hasUpper ,reRender]);

  const handleFolderChange = (e) => {
    props.onChangeFolder(e); //e is folderName (in folderlist: props.folderName)
  };
  const ignoreHandleFolderChange = (e) => {};


  const handleAddFolder = () => {
    setFolderAdding(true);
  };
  const handleNewFolderName = (e) => {
    setNewFolderName(e.target.value);
  };
  return (
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {folder.map((fold, index) => {
          return (
            <Fragment key={fold._id}>
              {hasUpper ? (
                <FolderList
                  folderName={fold.folderName}
                  folderIdx={index}
                  onChangeFolder={handleFolderChange}
                  onDeleteFolder={onDelFolder}
                />
              ) : (
                <FolderList
                  folderName={fold.folderName}
                  folderIdx={index}
                    onChangeFolder={ignoreHandleFolderChange}
                  onDeleteFolder={onDelFolder}
                />
              )}
              <Divider />
            </Fragment>
          );
        })}
        {folderAdding===false ? (
        <ListItem >
            <ListItemButton inset={"true"}>
              <ListItemIcon onClick={handleAddFolder}>
                <AddIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>)
         : (
          <ListItem secondaryAction={<IconButton edge="end" onClick={postAddFolder}><AddCircleOutlineIcon/></IconButton>}>
            <ListItemText primary={
              <TextField
                onChange={handleNewFolderName}
              value={newFolderName} size="small"/>}
              
              />
            
          </ListItem>)
        }
        
      </List>
  );
};

export default FolderPage;
