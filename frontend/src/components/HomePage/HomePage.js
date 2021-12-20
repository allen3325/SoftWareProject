import { Button, Grid, Link } from "@material-ui/core";
import Cards from "../Cards/Cards"
import { TextField } from "@mui/material";
import "./HomePage.css"
function HomePage() {
  const cards = [
    {
      id: 1,
      Title: 'myDiary1',
      Content: 'content1',
      Tag: '#hje,#kjkj',
      Date: new Date(2020, 7, 14),
    },
    {
      id: 2,
      Title: 'myDiary2',
      Content: 'content2',
      Tag: '#hje,#kjkj',
      Date: new Date(2021, 7, 23),
    },
    {
      id: 3,
      Title: 'myDiary3',
      Content: 'content3',
      Tag: '#hje,#kjkj',
      Date: new Date(2020, 12, 9),
    },
    {
      id: 4,
      Title: 'myDiary4',
      Content: 'content4',
      Tag: '#hje,#kjkj',
      Date: new Date(2020, 10, 3),
    },
  ];
  return (
    <div>
      <main>
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="flex-start"
        >
          <Grid item xs={1} sm={1} md={1}>
            <h1>Folder</h1>
          </Grid>
          <Grid item xs={2} sm={4} md={8}>
            <Cards items={cards} />
          </Grid>
          {/* <Grid item>
            <Grid item>
              <Button href="/newDiary">New Diary</Button>
            </Grid>
            <Grid item>
              <div className='new-expense__control'>
                <label>Date</label>
                <input
                  type='date'
                  // value={enteredDate}
                  // onChange={dateChangeHandler}
                />
              </div>
            </Grid>
          </Grid> */}
        </Grid>

      </main>
    </div>
  );
}

export default HomePage;