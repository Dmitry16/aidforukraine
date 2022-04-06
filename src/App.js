import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import smoothscroll from 'smoothscroll-polyfill';

import MainPage from "./pages/main-page";
import theme from "./theme";

smoothscroll.polyfill();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
export default App;
