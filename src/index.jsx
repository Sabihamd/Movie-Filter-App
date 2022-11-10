import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider, QueryClient } from "react-query";
import { ThemeProvider } from "react-jss";
import App from "./App";

const queryClient = new QueryClient();
const theme = {
  backgroundColor: "#254D4A",
  color: "#254D4A",
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </QueryClientProvider>
);
