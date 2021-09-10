import React, {useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages';
import { ThemeProvider } from "styled-components";
import { darkMode, lightMode, GlobalStyle } from "./themes";

function App() {
  const [theme] = useState("dark");
  /*const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };*/
  //<button onClick={() => themeToggler}>Change mode</button>

  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme === "light" ? lightMode : darkMode}>
          <GlobalStyle />
          <Home />
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
