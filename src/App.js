import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MainPage from "./pages/main-page";

import theme from "./theme";

// smoothscroll.polyfill();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/aidforukraine" element={<MainPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
export default App;
