// import { useState } from "react";
import "./App.css";
import Home from "./Page/Home";
import TopNav from "./Components/Navbar";
import About from "./Components/About";
// import Classes from "./Components/Classes";
import Gallary from "./Components/Tabs/Tabs";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./Components/Tabs/Theme";
import { themes } from "./Components/Schedules/Themes";

import Export from "./Components/expert";

import SimpleTabs from "./Components/Schedules/indexs";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <TopNav />
      <Home />
      <About />
      <ThemeProvider theme={theme}>
        <Gallary />
      </ThemeProvider>
      <ThemeProvider theme={themes}>
        <SimpleTabs />
      </ThemeProvider>
      <Export />
      <Contact />
    </div>
  );
}

export default App;
