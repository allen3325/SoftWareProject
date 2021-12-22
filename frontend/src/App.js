import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./components/AboutPage/AboutPage";
import HomePage from "./components/HomePage/HomePage";
import Header from "./components/Header/Header";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import ActivatePage from "./components/ActivatePage/ActivatePage";
import ForgotPasswordPage from "./components/ForgotPasswordPage/ForgotPasswordPage";
import NewDiaryPage from "./components/NewDiaryPage/NewDiaryPage";
import CalenderSearchPage from "./components/CalenderSearchPage/CalenderSearchPage";
import FolderPage from "./components/FolderPage/FolderPage";

function App() {
  // let localDarkMode = localStorage.getItem("darkMode");
  const [darkMode, setDarkMode] = useState(false);

  // to recive the param from child
  const changeDarkMode = (enteredDarkMode) => {
    const darkMode = enteredDarkMode;
    setDarkMode(darkMode);
    localStorage.setItem("darkMode", darkMode);
    console.log("App is " + darkMode);
  };

  //TODO: try theme.js
  let theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: "#37AEF2",
        light: "#37AEF2",
        dark: "#1B92D1",
        contrastText: "#fff",
      },
    },
    mixins: {
      toolbar: 0,
    },
  });

  let isLogin = false;
  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={0}>
        <Header isLogin={isLogin} onChangeDarkMode={changeDarkMode} propsDarkMode={darkMode} />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="about" element={<AboutPage />} />
          <Route exact path="login" element={<LoginPage />} />
          <Route exact path="register" element={<RegisterPage />} />
          <Route exact path="activate" element={<ActivatePage />} />
          <Route exact path="forgotpassword" element={<ForgotPasswordPage />} />
          <Route exact path="newDiary" element={<NewDiaryPage />} />
          <Route exact path="calenderSearch" element={<CalenderSearchPage />} />
          <Route exact path="folderPage" element={<FolderPage />} />
        </Routes>
      </Paper>
    </ThemeProvider>
  );
}
export default App;
