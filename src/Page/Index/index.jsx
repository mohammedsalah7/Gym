import { useEffect, useState } from "react";
import TopNav from "../../Components/Navbar";
import NavScroll from "../../Components/Navbar/navScroll";

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
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const height = window.scrollY;
    if (height > 600) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <div>
      <TopNav />
      <Bxs />
      {scrolled && <NavScroll />}
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
