import "./App.css";
import * as React from "react";
import Router from "./routes";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#387373",
      },
      secondary: {
        main: "#2D3E40",
      },
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </div>
  );
}

export default App;
