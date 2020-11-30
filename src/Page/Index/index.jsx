import React from "react";
import TopNav from "../../Components/Navbar";
import Bxs from "../../Components/Home/index";
import About from "../../Components/About";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "../../Components/Tabs/Theme";
import { themes } from "../../Components/Schedules/Themes";
import Classes from "../../Components/Classes/index";
import Export from "../../Components/expert";

import SimpleTabs from "../../Components/Schedules/indexs";
import Contact from "../../Components/Contact";

export default function Index() {
  return (
    <div>
      <TopNav />
      <Bxs />
      <About />
      <ThemeProvider theme={theme}>
        <Classes />
      </ThemeProvider>
      <ThemeProvider theme={themes}>
        <SimpleTabs />
      </ThemeProvider>
      <Export />
      <Contact />
    </div>
  );
}
