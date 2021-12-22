import { Button, Grid, Link } from "@material-ui/core";
import { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import { TextField } from "@mui/material";
import FolderPage from "../FolderPage/FolderPage";
import "./HomePage.css"
import axios from "../axios/axios"
function HomePage(props) {
  const cards = [
    {
      id: 1,
      Title: "myDiary1",
      Content: "content1",
      Tag: "#hje,#kjkj",
      Date: new Date(2020, 7, 14),
    },
    {
      id: 2,
      Title: "myDiary2",
      Content: "content2",
      Tag: "#hje,#kjkj",
      Date: new Date(2021, 7, 23),
    },
    {
      id: 3,
      Title: "myDiary3",
      Content: "content3",
      Tag: "#hje,#kjkj",
      Date: new Date(2020, 12, 9),
    },
    {
      id: 4,
      Title: "myDiary4",
      Content: "content4",
      Tag: "#hje,#kjkj",
      Date: new Date(2020, 10, 3),
    },
  ];
  const email = "allen3325940072@gmail.com";

  const [folder, setFolder] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState("");

  useEffect(() => {
    axios
      .get("/user/" + email + "/folder")
      .then((res) => {
        // console.log(res.data);
        setFolder(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);  ///get folder list in the beginning

  useEffect(() => {
    if (folder.length > 0 && selectedFolder === "")  { 
      setSelectedFolder(folder[0].folderName);
    }
    console.log("folder is " + selectedFolder);
  }, [folder, selectedFolder]); //if folder is loaded select the first as default

  const handleFolderChange = (e) => {
    setSelectedFolder(e);
  };

  return (
    <div>
      <main>
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="flex-start"
        >
          <Grid item xs={4} sm={4} md={4}>
            <FolderPage folder={folder} onChangeFolder={handleFolderChange} />
          </Grid>
          <Grid item xs={8} sm={8} md={8}>
            <Cards items={cards} />
          </Grid>
        </Grid>
      </main>
    </div>
  );

}

export default HomePage;
