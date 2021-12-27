import React, { useEffect } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import axios from "../axios/axios";

const FolderChoose = (props) => {
    const [folder, setFolder] = React.useState('');
    const [folders, setFolders] = React.useState([]);

    const fetchFolder = () => {
        axios.get(`/user/${props.email}/folder`)
            .then((response) => {
                setFolders(response.data);
            })
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        // console.log('porps.email', props.email);
        if(props.email)
            fetchFolder();
    }, [props.email]);
    useEffect(() => {console.log('porps.upper', props.upper);}, [props.upper]);
    useEffect(() => { 
        // console.log("props.folder:"+props.folder);
        if (props.folder) {
            setFolder(props.folder);
            // console.log("in Folderchoose " + props.folder);
        }
        else setFolder("");
    },[props.folder]);


    const handleFolderChange = (event) => {
        props.onChangeFolder(event.target.value)
        // setFolder(event.target.value);
    };
    return (
        folder || props.upper==="NewDiaryPage" ?
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Choose Folder</InputLabel>
            <Select
            // displayEmpty
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Folder"
            defaultValue={folder??""}
            onChange={handleFolderChange}
        >
            <MenuItem key={0} value={""} ></MenuItem>
            {folders.map((fold) => <MenuItem key={fold._id} value={String(fold.folderName)} >{fold.folderName}</MenuItem>)}
                </Select>
                </FormControl>
            : 
                <FormControl fullWidth>
                    <Select
            displayEmpty
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Folder"
            defaultValue="Loading..."
            >
            <MenuItem value={"Loading..."} selected={true}>Loading...</MenuItem>
            </Select>
            </FormControl>
            
        
    )
}

export default FolderChoose;