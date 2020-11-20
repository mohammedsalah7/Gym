import "./App.css";
import Home from "./Page/Home";
import TopNav from "./Components/Navbar";
import About from "./Components/About";

function App() {
  return (
    <div className="App">
      <TopNav />
      <Home />
      <About />
    </div>
  );
}

export default App;
