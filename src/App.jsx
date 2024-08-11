import React from "react";
import TimeZone from "./pages/Home";
import "./index.css";
import { ThemeProvider } from "./components/ToggleTheme";

const App = () => {
  return (
    <ThemeProvider>
      <TimeZone />
    </ThemeProvider>
  );
};

export default App;
