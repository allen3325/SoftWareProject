import { Paper } from "@mui/material"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../axios/axios";
import SearchCard from "./SearchCard";

const SearchDiaryPage = () => {
    let searchKeyWord = useParams();
    const [diarys, setDiarys] = useState([]);
    const [render, setRender] = useState(false);
    // console.log("render");
    // console.log(diarys);
    const email = "allen3325940072@gmail.com";
    useEffect(() => {
        // setRender(false);
        search();
    }, [searchKeyWord])
    const search = () => {
        axios.get(`/search/${email}?condition=title&search_query=${searchKeyWord.keyWord}`)
            .then(res => {
                setDiarys(res.data.diaryArray);
                setRender(true);
            })
            .catch(e => console.log(e))
        // console.log(searchKeyWord.keyWord);
    }
    // console.log(render)
    return (
        <Paper>
            {!render ? "no diary" : diarys.map((diary) => {
                <SearchCard items={diary} />
            })}
        </Paper>
    )
};

export default SearchDiaryPage;