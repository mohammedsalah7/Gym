import "./App.css";
import Index from "./Page/Index";
import Signup from "./Page/Signup";
import LogIn from "./Page/login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useReducer, createContext } from "react";

const initState = {
  isLoggedIn: false,
  name: "",
  isAuthenticated: false,
  errors: {},
};

function loginReducer(state, action) {
  switch (action.type) {
    case "login":
      window.localStorage.setItem("isLoggedIn", true);
      window.localStorage.setItem("name", action.payload);
      return {
        isLoggedIn: true,
        isLoading: false,
        name: action.payload,
        error: "",
      };
    case "signup":
      window.localStorage.setItem("name", action.payload);
      return {
        isLoggedIn: true,
        isLoading: false,
        name: action.payload,
        error: "",
      };
    case "logout":
      window.localStorage.setItem("isLoggedIn", false);
      window.localStorage.setItem("name", "");

      return { isLoggedIn: false, name: "", error: "", isLoading: false };
    case "error":
      return { ...state, error: action.error };
    case "loading":
      return { ...state, isLoading: true };

    default:
      throw new Error("Invalid action type");
  }
}
export const LoginsContext = createContext({
  state: initState,
  dispatch: null,
});
function App() {
  const [state, dispatch] = useReducer(loginReducer, initState);

  return (
    <div className="App">
      <Router>
        <Switch>
          <LoginsContext.Provider value={{ state, dispatch }}>
            <Route exact path="/">
              <Index />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/login">
              <LogIn />
            </Route>
          </LoginsContext.Provider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
