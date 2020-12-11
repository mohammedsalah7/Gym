import { useEffect, useState } from "react";
import TopNav from "../../Components/Navbar";
import NavScroll from "../../Components/Navbar/navScroll";
import Home from "../../Components/Home/index";
import About from "../../Components/About";
import { ThemeProvider } from "@material-ui/core";
import { themeTab } from "../../Components/Tabs/Theme";
import { themeTabel } from "../../Components/Schedules/Themes";
import Classes from "../../Components/Classes/index";
import Export from "../../Components/expert";
import Schedules from "../../Components/Schedules/indexs";
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
      <Home />
      {scrolled && <NavScroll />}
      <About />
      <ThemeProvider theme={themeTab}>
        <Classes />
      </ThemeProvider>
      <ThemeProvider theme={themeTabel}>
        <Schedules />
      </ThemeProvider>
      <Export />
      <Contact />
    </div>
  );
}
