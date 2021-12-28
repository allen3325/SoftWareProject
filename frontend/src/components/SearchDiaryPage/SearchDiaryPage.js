import { Paper } from "@mui/material"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../axios/axios";
import SearchCard from "./SearchCard";

const SearchDiaryPage = () => {
    let searchKeyWord = useParams();
    const [diarys, setDiarys] = useState([]);
    const [render, setRender] = useState(false);
    let tmp = [];
    // console.log("render");
    // console.log(diarys);
    const email = "allen3325940072@gmail.com";
    useEffect(() => {
        // console.log(diarys)
        // setRender(false);
        search();
    }, [searchKeyWord])
    const search = () => {
        axios.get(`/search/${email}?condition=title&search_query=${searchKeyWord.keyWord}`)
            .then(res => {
                console.log(res.data);
                if (res.data.folderArray.length > 0) {
                    res.data.folderArray.forEach(element => {
                        console.log(element);
                        if (element.length !== 0) {
                            element.diary[0].forEach((diary) => {
                                // console.log(diary);
                                tmp.push(<SearchCard key={diary._id} inFolder={element.folderName} items={diary} />);
                            });
                            setRender(true);
                        } else {
                            setRender(false);
                        }
                    });
                    
                    setDiarys(tmp);
                }
            })
            .catch(e => console.log(e))
        // console.log(searchKeyWord.keyWord);
        
    }
    // console.log(render)
    return (
        <Paper>
            {!render ? "no diary" : diarys}
        </Paper>
        // diarys.map((diary) => {
        //     <SearchCard items={diary} />
        // })
    )
};

export default SearchDiaryPage;