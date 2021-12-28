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
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CreateNewFolderOutlinedIcon from "@mui/icons-material/CreateNewFolderOutlined";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";




const FolderPage = (props) => {
  const email = "allen3325940072@gmail.com";
  const [folder, setFolder] = useState([]);
  const [hasUpper, setHasUpper] = useState(0);
  const [folderAdding, setFolderAdding] = useState(false);
  const [newFolderName, setNewFolderName] = useState("");
  const [editFolderName, setEditFolderName] = useState("");
  const [reRender, setReRender] = useState(false);
  const [newFolderFail, setNewFolderFail] = useState(false);
  const [newFolderSuccess, setNewFolderSuccess] = useState(false);
  const [delFolderFail, setDelFolderFail] = useState(false);
  const [delFolderSuccess, setDelFolderSuccess] = useState(false);
  useEffect(() => {
    setFolderAdding(false);
    setReRender(false);
  }, []);


  function postAddFolder() {
    if (
      newFolderName === "" ||
      newFolderName === undefined ||
      newFolderName === null ||
      newFolderName.trim() === " "
    ) {
      setFolderAdding(false);
      return;
    }
    axios
      .post(`/user/${email}/folder`, {
        folderName: newFolderName,
      })
      .then((res) => {
        // console.log(res.data);
        setFolder(res.data.log.folder);
        // console.log(res.data.log.folder);
        setFolderAdding(false);
        setReRender(true);
        setNewFolderSuccess(true);
        setNewFolderName("");
      })
      .catch((err) => {
        setNewFolderFail(true);
        console.log(err);
      });
  }
  function onDelFolder(folderName) {
    axios
      .delete(`/user/${email}/${folderName}`, {
        folderName: newFolderName
      })
      .then((res) => {
        // console.log(res.data);
        setReRender(true);
        setDelFolderSuccess(true);
      })
      .catch((err) => {
        console.log(err);
        setDelFolderFail(true);
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
        // console.log(res.data);
        setFolder(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.folder, props.hasUpper, reRender]);

  const handleNewFolderFail = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setNewFolderFail(false);
  };

  const handleNewFoldereSuccess = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setNewFolderSuccess(false);
  };

  const handleDelFolderFail = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setDelFolderFail(false);
  };

  const handleDelFoldereSuccess = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setDelFolderSuccess(false);
  };

  const handleFolderChange = (e) => {
    props.onChangeFolder(e); //e is folderName (in folderlist: props.folderName)
  };
  const ignoreHandleFolderChange = (e) => { };

  const handleAddFolder = () => {
    setFolderAdding(true);
  };
  const handleNewFolderName = (e) => {
    setNewFolderName(e.target.value);
  };

  const handleRender = () => {
    setReRender(true);
  };
  return (
    <>
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
                  onRender={handleRender}
                />
              ) : (
                <FolderList
                  folderName={fold.folderName}
                  folderIdx={index}
                  onChangeFolder={ignoreHandleFolderChange}
                  onDeleteFolder={onDelFolder}
                  onRender={handleRender}
                />
              )}
              <Divider />
            </Fragment>
          );
        })}
        {folderAdding === false ? (
          <ListItem>
            <ListItemButton inset={"true"}>
              <ListItemIcon onClick={handleAddFolder}>
                <AddIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        ) : (
          <ListItem
            secondaryAction={
              <IconButton edge="end" onClick={postAddFolder}>
                <AddCircleOutlineIcon />
              </IconButton>
            }
          >
            <ListItemText
              primary={
                <TextField
                  onChange={handleNewFolderName}
                  value={newFolderName}
                  size="small"
                />
              }
            />
          </ListItem>
        )}
      </List>
      <Snackbar
        open={newFolderFail}
        autoHideDuration={2000}
        onClose={handleNewFolderFail}
      >
        <Alert
          onClose={handleNewFolderFail}
          severity="error"
          sx={{ width: "100%" }}
        >
          New Folder Fail
        </Alert>
      </Snackbar>
      <Snackbar
        open={newFolderSuccess}
        autoHideDuration={2000}
        onClose={handleNewFoldereSuccess}
      >
        <Alert
          onClose={handleNewFoldereSuccess}
          severity="success"
          sx={{ width: "100%" }}
        >
          New Folder Successfully.
        </Alert>
      </Snackbar>

      <Snackbar
        open={delFolderFail}
        autoHideDuration={2000}
        onClose={handleDelFolderFail}
      >
        <Alert
          onClose={handleDelFolderFail}
          severity="error"
          sx={{ width: "100%" }}
        >
          Delete Folder Fail
        </Alert>
      </Snackbar>
      <Snackbar
        open={delFolderSuccess}
        autoHideDuration={2000}
        onClose={handleDelFoldereSuccess}
      >
        <Alert
          onClose={handleDelFoldereSuccess}
          severity="success"
          sx={{ width: "100%" }}
        >
          Delete Folder Successfully.
        </Alert>
      </Snackbar>
    </>
  );
};

export default FolderPage;
