import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
const axios = require('axios');

const FolderChoose = (props) => {
    const [folder, setFolder] = React.useState('');
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
                <MenuItem value={"Folder1"}>Folder1</MenuItem>
                <MenuItem value={"Folder2"}>Folder2</MenuItem>
                <MenuItem value={"Folder3"}>Folder3</MenuItem>
            </Select>
        </FormControl>
    )
}

export default FolderChoose;