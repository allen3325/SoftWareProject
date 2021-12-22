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

    const fetchFolder = () => {
        axios.get('/user/genewang7@gmail.com/folder')
            .then((response) => {
                setFolders(response.data);
            })
            .catch((error) => console.log(error))
    }

    const handleFolderChange = (event) => {
        props.onChangeFolder(event.target.value)
        setFolder(event.target.value);
    };
    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Choose Folder</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={folder}
                label="Folder"
                onChange={handleFolderChange}
            >
                {/* <MenuItem value={"Folder1"}>Folder1</MenuItem>
                <MenuItem value={"Folder2"}>Folder2</MenuItem>
                <MenuItem value={"Folder3"}>Folder3</MenuItem> */}
                {folders.map((folder) => <MenuItem key={folder._id} value={folder.folderName} >{folder.folderName}</MenuItem>)}
            </Select>
        </FormControl>
    )
}

export default FolderChoose;