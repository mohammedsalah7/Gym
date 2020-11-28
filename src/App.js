import "./App.css";
import Home from "./Page/Home";
import TopNav from "./Components/Navbar";
import About from "./Components/About";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./Components/Tabs/Theme";
import { themes } from "./Components/Schedules/Themes";
import Classes from "./Components/Classes/index";
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

export default App;
