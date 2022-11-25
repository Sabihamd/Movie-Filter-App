import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "react-jss";
import App from "./App";

const theme = {
  backgroundColor: "#254D4A",
  color: "#254D4A",
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
