import React, { createContext, useState, useContext } from "react";

const ToggleTheme = createContext({
  theme: "light",
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ToggleTheme.Provider value={{ theme, toggleTheme }}>
      {children}
    </ToggleTheme.Provider>
  );
};

export const useTheme = () => useContext(ToggleTheme);
