import * as React from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';

const TextArea = (props) => {
    const handleContentChange = (event) => {
        // console.log("value is " + event.target.value);
        props.onChangeContent(event.target.value);
    }
    return (
        <TextareaAutosize
            minRows={23}
            maxRows={23}
            placeholder="請輸入日記"
            style={{ width: "100%",backgroundColor:"#FFF0D4"}}
            onChange={handleContentChange}
        />
    )
}

export default TextArea;