import React from "react"
import { Button } from "@material-ui/core";
import styled from "@emotion/styled";

const Input = styled('input')({
    display: 'none',
});

const upload = () => {
    const inputElement = document.getElementById("contained-button-file");
    console.log(inputElement.files[0]);
}


const NewDiaryPage = () => {
    return (
        <div>
            <h1>上傳測試</h1>
            <label htmlFor="contained-button-file">
                <Input accept="image/*" id="contained-button-file" multiple type="file" onChange={upload} />
                <Button variant="contained" component="span">
                    Upload
                </Button>
            </label>
        </div>
    )
}

export default NewDiaryPage;