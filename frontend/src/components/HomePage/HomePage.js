import { Button, Grid, Link } from "@material-ui/core";
import { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import { TextField } from "@mui/material";
import FolderPage from "../FolderPage/FolderPage";
import "./HomePage.css";
import axios from "axios";
import { set } from "date-fns";

function HomePage() {
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
  const email = "genewang7@gmail.com";

  const [folder, setFolder] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1/" + email + "/folder")
      .then((res) => {
        setFolder(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleFolderChange = (e) => {
    setFolder(e);
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
