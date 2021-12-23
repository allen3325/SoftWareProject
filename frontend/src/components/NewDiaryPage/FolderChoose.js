import React, { useEffect } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import axios from "../axios/axios";

const FolderChoose = (props) => {
    const [folder, setFolder] = React.useState('');
    const [folders, setFolders] = React.useState([]);

    useEffect(() => {
        console.log('execute function in useEffect');
        fetchFolder();
    }, []);

    useEffect(() => { 
        console.log("props.folder:"+props.folder);
        if (props.folder) {
            setFolder(props.folder);
            console.log("in Folderchoose " + props.folder);
        }
        else setFolder("");
    },[props.folder]);

    const fetchFolder = () => {
        axios.get(`/user/${props.email}/folder`)
            .then((response) => {
                setFolders(response.data);
            })
            .catch((error) => console.log(error))
    }

    const handleFolderChange = (event) => {
        props.onChangeFolder(event.target.value)
        // setFolder(event.target.value);
    };
    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Choose Folder</InputLabel>
            <Select
                // displayEmpty
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Folder"
                // defaultValue={folder??""}
                onChange={handleFolderChange}
            >
                {/* <MenuItem value={"Folder1"} selected={true}>Folder1</MenuItem>
                <MenuItem value={"Folder2"}>Folder2</MenuItem>
                <MenuItem value={"Folder3"}>Folder3</MenuItem> */}
                <MenuItem key={0} value={""} ></MenuItem>
                {folders.map((fold) => <MenuItem key={fold._id} value={String(fold.folderName)} selected={folder!==undefined && folder===fold.folderName} >{fold.folderName}</MenuItem>)}
            </Select>
        </FormControl>
    )
}

export default FolderChoose;